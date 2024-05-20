const express = require('express')
const app = express();

app.use(express.urlencoded({extended: false}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb/bigcities', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on("error", (err) => {
  console.log("MongoDB connection error: "+err);
});
db.on("connected", () => {
  console.log("Connected to MongoDB");
});
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});
const checkDatabaseConnection = () => {
  if (db.readyState !== 1) {
    console.error('Lost connection to MongoDB');
    process.exit(1);
  }
};
setInterval(checkDatabaseConnection, 5000);

const citySchema = new mongoose.Schema({
  _id: Number,
  Name: String,
  'ASCII Name': String,
  'ISO Alpha-2': String,
  'ISO Name EN': String,
  Population: Number,
  Timezone: String,
  'Modification date': String,
  Coordinates: String
});
const City = mongoose.model('City', citySchema);

app.get('/cities/v1/all', async (req, res) => {
  const gte = req.query.gte;
  const lte = req.query.lte;

  try {
    let query = City.find();

    if (gte && lte) {
      query = query.where('Population').gte(parseInt(gte)).lte(parseInt(lte));
    } else if (gte) {
      query = query.where('Population').gte(parseInt(gte));
    } else if (lte) {
      query = query.where('Population').lte(parseInt(lte));
    }

    let documents = null;
    if (gte || lte) {
      documents = await query.sort({ Population: -1 }).exec();
    } else {
      documents = await query.sort({ _id: 1 }).exec();
    }

    if (documents.length === 0) {
      return res.status(404).json({ error: 'No record for this population range' });
    } 

    let transformedDocuments = documents.map((doc) => {
      const [lat, lng] = doc.Coordinates.split(',');
      return {
        _id: doc._id,
        Name: doc.Name,
        'ASCII Name': doc['ASCII Name'],
        'ISO Alpha-2': doc['ISO Alpha-2'],
        'ISO Name EN': doc['ISO Name EN'],
        Population: doc.Population,
        Timezone: doc.Timezone,
        'Modification date': doc['Modification date'],
        Coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) }
      };
    });

    return res.status(200).json(transformedDocuments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/cities/v1/alpha/:code?', async (req, res) => {
  try {
    const {code} = req.params;
    if (!code) {
      const uniqueAlphaCodes = await City.distinct('ISO Alpha-2');

      const alphaObjects = uniqueAlphaCodes.map(async alphaCode => {
        const city = await City.findOne({ 'ISO Alpha-2': alphaCode });
        const alphaName = city['ISO Name EN'] ? city['ISO Name EN'] : '';
        return { code: alphaCode, name: alphaName };
      });

      const sortedAlphaCodes = (await Promise.all(alphaObjects)).sort((a, b) => (a.code).localeCompare(b.code));

      return res.status(200).json(sortedAlphaCodes);
    } else {
      const documents = await City.find({ 'ISO Alpha-2': code },
        {'ASCII Name': 1, 'ISO Alpha-2': 1, 'ISO Name EN': 1, 'Population': 1, 'Timezone': 1, 'Coordinates': 1});

      if (documents.length === 0) {
        return res.status(404).json({ error: 'No record for this alpha code' });
      }

      const transformedDocuments = documents.map((doc) => {
        const [lat, lng] = doc.Coordinates.split(',');
        return {
          'ASCII Name': doc['ASCII Name'],
          // 'ISO Alpha-2': doc['ISO Alpha-2'],
          // 'ISO Name EN': doc['ISO Name EN'],
          Population: doc.Population,
          Timezone: doc.Timezone,
          Coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) }
        };
      });
      transformedDocuments.sort((a, b) => b.Population - a.Population);

      return res.status(200).json(transformedDocuments);
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
});


app.get('/cities/v1/region/:code?', async (req, res) => {
  try {
    const { code } = req.params;
    if (!code) {
      const uniqueRegions = await City.distinct('Timezone');

      const regions = uniqueRegions.map((timezone) => {
        const region = timezone.split('/')[0];
        return region;
      });

      const sortedRegions = [...new Set(regions)].sort(); //convert to set to remove duplicates

      return res.status(200).json(sortedRegions);
    } else {
      const documents = await City.find({ 'Timezone': { $regex: `^${code}/` } },
        {'ASCII Name': 1, 'ISO Alpha-2': 1, 'ISO Name EN': 1, 'Population': 1, 'Timezone': 1, 'Coordinates': 1})
        .sort({ Population: -1 });

      if (documents.length === 0) {
        return res.status(404).json({ error: 'No record for this region' });
      }

      const transformedDocuments = documents.map((doc) => {
        const [lat, lng] = doc.Coordinates.split(',');
        return {
          'ASCII Name': doc['ASCII Name'],
          'ISO Alpha-2': doc['ISO Alpha-2'],
          'ISO Name EN': doc['ISO Name EN'],
          Population: doc.Population,
          Timezone: doc.Timezone,
          Coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) }
        };
      });

      return res.status(200).json(transformedDocuments);
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.get('/cities/v1/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const partialMatch = req.query.partial;
    const alpha = req.query.alpha;
    const region = req.query.region;
    const sort = req.query.sort;

    const filterByAlpha = (documents, alpha) => {
      return documents.filter((doc) => {
        const alphaCode = doc['ISO Alpha-2'];
        return alphaCode.toLowerCase() === alpha.toLowerCase();
      });
    };

    const filterByRegion = (documents, region) => {
      return documents.filter((doc) => {
        const regionCode = doc.Timezone.split('/')[0];
        return regionCode.toLowerCase() === region.toLowerCase();
      });
    };

    let documents;

    if (partialMatch === 'true') {
      documents = await City.find({ 'ASCII Name': { $regex: city } });
    } else {
      documents = await City.find({ 'ASCII Name': city });
    }

    if (alpha && region) {
      documents = filterByAlpha(documents, alpha); //ignore region if both alpha and region are provided
    } else if (alpha) {
      documents = filterByAlpha(documents, alpha);
    } else if (region) {
      documents = filterByRegion(documents, region);
    }

    if (documents.length === 0) {
      return res.status(404).json({ error: 'No record for this city name' });
    }

    let transformedDocuments = documents.map((doc) => {
      const [lat, lng] = doc.Coordinates.split(',');
      return {
        _id: doc._id,
        'ASCII Name': doc['ASCII Name'],
        'ISO Alpha-2': doc['ISO Alpha-2'],
        'ISO Name EN': doc['ISO Name EN'],
        Population: doc.Population,
        Timezone: doc.Timezone,
        Coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) }
      };
    });

    if (sort === 'alpha') {
      transformedDocuments.sort((a, b) => a['ISO Alpha-2'].localeCompare(b['ISO Alpha-2']));
    } else if (sort === 'population') {
      transformedDocuments.sort((a, b) => b.Population - a.Population);
    } else {
      // console.log('no sort');
      transformedDocuments.sort((a, b) => a._id - b._id); //default sort by _id for wrong sort parameter
    }

    return res.status(200).json(transformedDocuments);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.all('*', (req, res) => {
  const { method, originalUrl } = req;
  const errorMessage = `Cannot ${method} ${originalUrl}`;
  res.status(400).json({ error: errorMessage });
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'error': err.message});
});

app.listen(3000, () => {
  console.log('listening on port 3000!')
});