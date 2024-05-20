var weather_portal = document.createElement('h1');
weather_portal.textContent = 'My Weather Portal';
weather_portal.id = 'weatherportal';
document.addEventListener('DOMContentLoaded', function() {
  document.body.appendChild(weather_portal);
});

var header = document.createElement('div');
header.id = 'header';
var city = document.createElement('p');
city.textContent = 'Hong Kong';
city.id = 'city';
header.appendChild(city);
var weather = document.createElement('div');
weather.id = 'weather';
var imageElement = document.createElement('img');
imageElement.id = 'weathericon';
imageElement.src = '';
imageElement.alt = 'Weather Icon';
weather.appendChild(imageElement);
header.appendChild(weather);
var temperature = document.createElement('div');
temperature.id = 'temperature';
header.appendChild(temperature);

var humid = document.createElement('div');
humid.id = 'humid';
header.appendChild(humid);

var rainfall = document.createElement('div');
rainfall.id = 'rainfall';
header.appendChild(rainfall);

var placeholder = document.createElement('div');
placeholder.id = 'placeholder';
header.appendChild(placeholder);
var uvindex = document.createElement('div');
uvindex.id = 'uv-index';
header.appendChild(uvindex);


var updateTime = document.createElement('div');
updateTime.id = 'update-time';
header.appendChild(updateTime);

var toggleButton = document.createElement('div');
toggleButton.id = 'toggle-button';
var warning = document.createElement('p');
warning.id = 'warning';
warning.textContent = 'Warning';
warning.style.fontSize = 'larger';
warning.style.color = 'black';
//warning.fontweight = 'bold';
toggleButton.appendChild(warning);
var warningMessages = document.createElement('div');
warningMessages.id = 'warning-messages';
warningMessages.style.display = 'none';
toggleButton.appendChild(warningMessages);
header.appendChild(toggleButton);

document.addEventListener('DOMContentLoaded', function() {
  var target = document.getElementById('weatherportal');
  target.insertAdjacentElement('afterend', header);
});


var outerDiv1 = document.createElement('div')
outerDiv1.id = 'Mylocation';
// outerDiv1.setAttribute = ('id','Mylocation');
// outerDiv1.setAttribute = ('id','Mylocation');

var innerDiv1 = document.createElement('div');
innerDiv1.id = 'location';
innerDiv1.textContent = 'My Location';
var brElement = document.createElement('br');
// add <br>
innerDiv1.appendChild(brElement);

var currlocation = document.createElement('p');
currlocation.id = 'currlocation';
currlocation.style = "font-size: 19px;";
innerDiv1.appendChild(currlocation);
var culoinfo = document.createElement('div');
culoinfo.id = 'culoinfo';
culoinfo.style = "display: flex; flex-direction: row; justify-content: space-between; margin-top: 1rem;";
var culotemp = document.createElement('div');
culotemp.id = 'culotemp';
culoinfo.appendChild(culotemp);
var culorain = document.createElement('div');
culorain.id = 'culorain';
culoinfo.appendChild(culorain);
var culoair = document.createElement('div');
culoair.id = 'culoair';
culoinfo.appendChild(culoair);
innerDiv1.appendChild(culoinfo);

outerDiv1.appendChild(innerDiv1);

document.addEventListener('DOMContentLoaded', function() {
  var headerElement = document.getElementById('header');
  headerElement.insertAdjacentElement('afterend', outerDiv1);
});

var Temperature = document.createElement('div');
Temperature.id = 'Temperature';

var tempquery = document.createElement('div');
tempquery.id = 'tempquery';
tempquery.textContent = 'Temperatures';
tempquery.style = "margin-left: 1em; padding-bottom: 1em; padding-top: 10px;";
Temperature.appendChild(tempquery);
var brElement = document.createElement('br');
//Temperature.appendChild(brElement);

var queryblock = document.createElement('div');
queryblock.id = 'queryblock1';
tempcontent = document.createElement('p');
tempcontent.textContent = 'Select the location\n';
tempcontent.style = "margin-left: 1.5em;";
queryblock.appendChild(tempcontent);

var selectElement = document.createElement('select');
selectElement.id = 'station1';
selectElement.style = "margin-left: 2em;";
queryblock.appendChild(selectElement);

var output = document.createElement('div');
output.id = 'output1';
output.style="margin-top: 1rem; margin-left: 2em;"
queryblock.appendChild(output);
Temperature.appendChild(queryblock);

document.addEventListener('DOMContentLoaded', function() {
  var referenceElement = document.getElementById('Mylocation');
  referenceElement.insertAdjacentElement('afterend', Temperature);
});


var rainfall = document.createElement('div');
rainfall.id = 'Rainfall';

var rainquery = document.createElement('div');
rainquery.id = 'rainquery';
rainquery.textContent = 'Rainfall';
rainquery.style = "margin-left: 1em; padding-bottom: 1em; padding-top: 10px;";
rainfall.appendChild(rainquery);

var brElement = document.createElement('br');
//rainfall.appendChild(brElement);

var queryblock = document.createElement('div');
queryblock.id = 'queryblock2';
raincontent = document.createElement('p');
raincontent.textContent = 'Select the district\n';
raincontent.style = "margin-left: 1.5em;";
queryblock.appendChild(raincontent);

var selectElement = document.createElement('select');
selectElement.id = 'station2';
selectElement.style = "margin-left: 2em;";
queryblock.appendChild(selectElement);

var output = document.createElement('div');
output.id = 'output2';
output.style="margin-top: 1rem; margin-left: 2em;"
queryblock.appendChild(output);
rainfall.appendChild(queryblock);

document.addEventListener('DOMContentLoaded', function() {
  var referenceElement = document.getElementById('Temperature');
  referenceElement.insertAdjacentElement('afterend', rainfall);
});

var outerDiv = document.createElement('div');
outerDiv.setAttribute('id','AirQuality');

var innerDiv = document.createElement('div');
innerDiv.id = 'airquery';
innerDiv.textContent = 'Air Quality';
innerDiv.style = "margin-left: 1em; padding-bottom: 1em;padding-top: 10px;";

outerDiv.appendChild(innerDiv);

var brElement = document.createElement('br');
//outerDiv.appendChild(brElement);
var queryblock = document.createElement('div');
queryblock.id = 'queryblock3';
AQcontent = document.createElement('p');
AQcontent.textContent = 'Select the AQ Station\n';
AQcontent.style = "margin-left: 1.5em;";
queryblock.appendChild(AQcontent);

var selectElement = document.createElement('select');
selectElement.id = 'station3';
selectElement.style = "margin-left: 2em;";
queryblock.appendChild(selectElement);

var output3 = document.createElement('div');
output3.id = 'output3';
output3.style="margin-top: 1rem; margin-left: 2em;"
queryblock.appendChild(output3);
outerDiv.appendChild(queryblock);

document.addEventListener('DOMContentLoaded', function() {
  var referenceElement = document.getElementById('Rainfall');
  referenceElement.insertAdjacentElement('afterend',outerDiv);
});

var dayforecast = document.createElement('div');
dayforecast.id = 'DayForecast';

var nineday = document.createElement('div');
nineday.id = 'nineforecast';
nineday.textContent = '9-day Forecast';
nineday.style = "margin-left: 1em; padding-top: 10px;";
dayforecast.appendChild(nineday);

document.addEventListener('DOMContentLoaded', function() {
  var referenceElement = document.getElementById('AirQuality');
  referenceElement.insertAdjacentElement('afterend',dayforecast);
});

document.addEventListener('DOMContentLoaded', function() {
var mediaQuery = window.matchMedia('(max-width: 500px)');
if (mediaQuery.matches) {
  document.getElementById('tempquery').addEventListener('click', (evt) => {
    var element = document.getElementById("queryblock1");
    var computedStyle = window.getComputedStyle(element);
    var displayValue = computedStyle.getPropertyValue("display");
    if (displayValue == 'block') {
    return;
    }
    else{
      document.getElementById('queryblock2').style.setProperty('display', 'none','important');
      document.getElementById('Rainfall').style.setProperty("height", "8vh","important");
      document.getElementById('queryblock3').style.setProperty('display', 'none','important');
      document.getElementById('AirQuality').style.setProperty("height", "8vh","important");
      document.getElementById('queryblock1').style.setProperty('display', 'block','important');
      document.getElementById('Temperature').style.setProperty("height", "35vh","important");
    }
    });

    document.getElementById('rainquery').addEventListener('click', (evt) => {
      var element = document.getElementById("queryblock2");
      var computedStyle = window.getComputedStyle(element);
      var displayValue = computedStyle.getPropertyValue("display");
      if (displayValue == 'block') {
      return;
      }
      else{
        document.getElementById('queryblock1').style.setProperty('display', 'none','important');
        document.getElementById('Temperature').style.setProperty("height", "8vh","important");
        document.getElementById('queryblock3').style.setProperty('display', 'none','important');
        document.getElementById('AirQuality').style.setProperty("height", "8vh","important");
        document.getElementById('queryblock2').style.setProperty('display', 'block','important');
        document.getElementById('Rainfall').style.setProperty("height", "35vh","important");
      }
    });

    document.getElementById('airquery').addEventListener('click', (evt) => {
      var element = document.getElementById("queryblock3");
      var computedStyle = window.getComputedStyle(element);
      var displayValue = computedStyle.getPropertyValue("display");
      if (displayValue == 'block') {
      return;
      }
      else{
        document.getElementById('queryblock1').style.setProperty('display', 'none','important');
        document.getElementById('Temperature').style.setProperty("height", "8vh","important");
        document.getElementById('queryblock2').style.setProperty('display', 'none','important');
        document.getElementById('Rainfall').style.setProperty("height", "8vh","important");
        document.getElementById('queryblock3').style.setProperty('display', 'block','important');
        document.getElementById('AirQuality').style.setProperty("height", "35vh","important");
      }
    });
  }
  window.onresize = function() {
  var windowquery = window.matchMedia('(min-width: 800px)');
  if(windowquery.matches){
    //console.log('1111');
    document.getElementById('queryblock1').style.setProperty('display', 'block','important');
    document.getElementById('Temperature').style.setProperty("height", "25%", "important");
    document.getElementById('queryblock2').style.setProperty('display', 'block','important');
    document.getElementById('Rainfall').style.setProperty("height", "25%", "important");
    document.getElementById('queryblock3').style.setProperty('display', 'block','important');
    document.getElementById('AirQuality').style.setProperty("height", "25%", "important");
  } 
}});

fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
//fetch('data/weather.Oct4.json')
//fetch('data/weather.Sep27.json')
//fetch('data/weather.Oct7.json')
  .then(response => response.json())
  .then(data => {
    // Update the header with weather data
    const dateTimeString = data.updateTime;
    const dateTime = new Date(dateTimeString);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    // console.log(data.rainfall.data[13].max);
    if (data.rainfall.data[13].max > 0 && (hours >= 6 && hours <= 18)){
      var header = document.getElementById('header');
      header.style.backgroundImage = "url('images/water-drops-glass-day.jpg')";
      header.style.color = 'black';
    }
    else if (data.rainfall.data[13].max > 0 && (hours >= 19 || hours <= 5)){
      var header = document.getElementById('header');
      header.style.backgroundImage = "url('images/water-drops-glass-night.jpg')";
      header.style.color = 'white';
    }
    else if (data.rainfall.data[13].max == 0 && (hours >= 6 && hours <= 18)){
      var header = document.getElementById('header');
      header.style.backgroundImage = "url('images/blue-sky.jpg')";
      header.style.color = 'black';
    }
    else if (data.rainfall.data[13].max == 0 && (hours >= 19 || hours <= 5)){
      var header = document.getElementById('header');
      header.style.backgroundImage = "url('images/night-sky.jpg')";
      header.style.color = 'white';
    }
    const imageElement = document.getElementById('weathericon');
    imageElement.src = 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic' + data.icon[0] +'.png';
    imageElement.style.width = '40px';
    imageElement.style.height = '40px';
    var temp = document.getElementById('temperature');
    var temptext = `${data.temperature.data[1].value}\u00B0C`;
    temp.innerHTML = '<div style="font-size: 40px; display:inline; margin:0;">' + data.temperature.data[1].value + '</div>';
    temp.innerHTML += '<div style="font-size: 20px; display: inline; margin:0;">' + '\u00B0C' + '</div>';
    //document.getElementById('temperature').textContent = `${data.temperature.data[1].value}\u00B0C`;
    //document.getElementById('humidity').textContent = `${data.humidity.data[0].value}%`;
    var hum = document.getElementById('humid');
    //var humtext = `${data.humidity.data[0].value}%`;
    //humtext.style.fontSize = '20px';
    hum.innerHTML = '<div id="humm"; style="font-size: 40px;">' + data.humidity.data[0].value + '</div>';
    hum.innerHTML += '<div id="percent"; style="font-size: 20px;">' + '%' + '</div>';
    var percent = document.getElementById('percent');
    var imageelement2 = document.createElement('img');
    imageelement2.src = 'images/drop-64.png';
    imageelement2.style.width = '20px';
    imageelement2.style.height = '20px';
    percent.appendChild(imageelement2);
    var rain = document.getElementById('rainfall');
    rain.innerHTML = '<div id="run" style="font-size: 40px;">' + data.rainfall.data[13].max + '</div>';
    rain.innerHTML += '<div id="mm"style="font-size: 20px;">' + 'mm' + '</div>';
    var imageelement3 = document.createElement('img');
    imageelement3.src = 'images/rain-48.png';
    imageelement3.style.width = '20px';
    imageelement3.style.height = '20px';
    var mm = document.getElementById('mm');
    mm.appendChild(imageelement3);
    //document.getElementById('rainfall').textContent = `Rainfall: ${data.rainfall.data[13].max}mm`;
    // var imageelement3 = document.createElement('img');
    // imageelement3.src = 'images/rain-48.png';
    // imageelement3.style.width = '20px';
    // imageelement3.style.height = '20px';
    // selectElement3.appendChild(imageelement3);

    var uv = document.getElementById('uv-index');
    //console.log(data.uvindex);
    if (data.uvindex===''){
      uv.display = 'none';
      //uv.textContent = '0';
    }
    else if(data.uvindex.data[0].value === ''){
      //uv.textContent = '0';
      uv.display = 'none';
    }
    else{
      uv.textContent = `${data.uvindex.data[0].value}`;
      var imageelement1 = document.createElement('img');
      imageelement1.src = 'images/UVindex-48.png';
      imageelement1.style.width = '20px';
      imageelement1.style.height = '20px';
      uv.appendChild(imageelement1); 
    }
    //uv.textContent = `${data.uvindex.data[0].value}`;

    //document.getElementById('warning-messages').textContent = data.warningMessage ? data.warningMessage.join(', ') : '';
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    document.getElementById('update-time').textContent = `Last Update: ${formattedTime}`;
    // console.log(data.temperature.data[1].value);
    // Add event listener for the toggle button
    document.getElementById('toggle-button').addEventListener('click', function() {
      var toggleButton = document.getElementById('toggle-button');
      var content = document.getElementById('warning-messages');
      var warningMessage = document.getElementById('warning-messages');
      var place = document.getElementById('placeholder');
      var uv = document.getElementById('uv-index');
      //if (content.style.display === 'none') {
      if (warningMessage.style.display === 'none') {
        //content.style.display = 'block';
        //place.style.display = 'flex';
        //uv.style.display = 'none';
        //const war = 'Warning';
        //console.log(data.warningMessage);
        if (data.warningMessage == '') {
          //toggleButton.width = '100%';
          warningMessage.textContent= "No Warning for now";
          warningMessage.setAttribute("style",  "color: black !important;");
          warningMessage.style.display = 'block';
        } 
        else{
          //console.log(data.warningMessage);
          //toggleButton.width = '100%';
          warningMessage.textContent= data.warningMessage;
          warningMessage.setAttribute("style",  "color: black !important;");
          warningMessage.style.display = 'block';}
      } else {
        //content.style.display = 'none';
        //place.style.display = 'none';
        //uv.style.display = 'flex';
        //const war = 'Warning';
        //war.style.fontSize = 'larger';
        warningMessage.style.display = 'none';
      }
      // var selectElement = document.getElementById("station");
      // var selectedvalue = selectElement.value;

      // selectElement.addEventListener("change", function(event) {
      //   let selectedValue = event.target.value;
      //   console.log(selectedValue);
    });

   });
  //})
  // .catch(error => {
  //   console.error('An error occurred:', error);
  // });
    //fetch('data/weather.Oct7.json')
    //fetch('data/weather.Sep27.json')
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en")
    .then(response => response.json())
    .then(data => {
      createSelectOptions(data);
  })
    .catch(error => {
      console.error('error:', error);
    });

    function createSelectOptions(options) {
      optionstemp = options.temperature.data;
      optionstemp1 = options.temperature.data;
      optionsrain = options.rainfall.data; 
      optionsrain1 = options.rainfall.data;
      templist = [];
      rainlist = [];
      const select1 = document.getElementById('station1');
      controller1 = document.createElement('option');
      controller1.value = '';
      controller1.textContent = 'Please select:';
      controller1.disabled = true;
      controller1.selected = true;
      select1.appendChild(controller1);
      const select2 = document.getElementById('station2');
      controller2 = document.createElement('option');
      controller2.value = '';
      controller2.textContent = 'Please select:';
      controller2.disabled = true;
      controller2.selected = true;
      select2.appendChild(controller2);
      optionstemp1.forEach(option => {
        var valuesList = Object.values(option);
        templist.push(valuesList);
      });
      templist.sort(function(a, b) {
        return a[0].localeCompare(b[0]);
      });
      optionsrain1.forEach(option => {
        var valuesList = Object.values(option);
        //console.log(valuesList);
        rainlist.push(valuesList);
      });
      //console.log(rainlist);
      rainlist.sort(function(a, b) {
        return a[1].localeCompare(b[1]);
      });
      optionstemp.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = templist[optionstemp.indexOf(option)][0];
        optionElement.textContent = templist[optionstemp.indexOf(option)][0];
        select1.appendChild(optionElement);
      });
      optionsrain.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = rainlist[optionsrain.indexOf(option)][1];
        optionElement.textContent = rainlist[optionsrain.indexOf(option)][1];
        select2.appendChild(optionElement);
      });
    }

    // selectElement = document.getElementById("station");
    //   selectedvalue = selectElement.value;
    //   selectElement.addEventListener("change", function(event) {
    //     selectedvalue = event.target.value;
    //   });
    //fetch('data/weather.Sep27.json')
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    .then(response => response.json())
    // .then(data => {
    //   selectElement = document.getElementById("station");
    //   selectedvalue = selectElement.value;
    //   selectElement.addEventListener("change", function(event) {
    //     selectedvalue = event.target.value;
    //   });
    //   // console.log(selectedvalue);
    // })
    .then(data => {

      selectElement1 = document.getElementById("station1");
      selectElement2 = document.getElementById("station2");
      selectedvalue1 = selectElement1.value;
      selectedvalue2 = selectElement2.value;
      selectElement1.addEventListener("change", function(event) {
        selectedvalue1 = event.target.value;
        gottemp = findtemp(data, selectedvalue1,content="temperature",);
        output1 = document.getElementById("output1");
        var cc = '\u00B0C'
        output1.innerHTML = '<div style="font-size: 40px; display:inline;">'+ gottemp+'</div>';
        output1.innerHTML += '<div style="font-size: 20px; display:inline;">'+cc+'</div>';
      });
      selectElement2.addEventListener("change", function(event){
        selectedvalue2 = event.target.value;
        gotrain = findrain(data, selectedvalue2,content="rainfall");

        output2 = document.getElementById("output2");
        //output2.innerHTML = '<div style="font-size: 40px; display:inline;">'+'99'+'</div>';
        output2.innerHTML = '<div style="font-size: 40px; display:inline;">'+gotrain+'</div>';
        output2.innerHTML += '<div style="font-size: 20px; display:inline;">'+'mm'+'</div>';
      });   
    // .catch(function(error) {
    //   console.log("Error:", error);
    // });
      function findtemp(data,selectedvalue,content){

        var data = data[content].data;
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          if (item["place"] === selectedvalue) {
            return item.value;
          }
        }
        return null;
      };
      function findrain(data,selectedvalue,content){
        var data = data[content].data;
        //console.log(data);
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          if (item["place"] === selectedvalue) {
            return item.max;
          }
        }
        return null;
      };
    });
//fetch('data/forecast.Oct6.json')
fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en')
.then(response => response.json())
.then(WF => {
    var dayForecastDiv = document.getElementById('DayForecast');

    var table = document.createElement('table');

    var tableRow = document.createElement('tr');

    weatherData = [];
    dayweatherdata = [];
    for (var i = 0; i < 9; i++) {
      // dayweatherdata = {'week': WF.weatherForecast[i].week, 
      //                   'date': WF.weatherForecast[i].forecastDate, 
      //                   'icon': WF.weatherForecast[i].ForecastIcon, 
      //                   'psr': WF.weatherForecast[i].PSR, 
      //                   'temp': `${WF.weatherForecast[i].forecastMintemp.value}-${WF.weatherForecast[i].forecastMaxtemp.value}\u00B0C`,
      //                   'humidity': `${WF.weatherForecast[i].forecastMinrh.value}-${WF.weatherForecast[i].forecastMaxrh.value}%`,
      //                  }
      var weekString = WF.weatherForecast[i].week;

      var weekDayMap = {
        "Sunday": "Sun",
        "Monday": "Mon",
        "Tuesday": "Tue",
        "Wednesday": "Wed",
        "Thursday": "Thu",
        "Friday": "Fri",
        "Saturday": "Sat"
      };

      var abbreviatedWeekDay = weekDayMap[weekString];
      var dateString = WF.weatherForecast[i].forecastDate;
      var day = dateString.substr(6, 2);
      var month = dateString.substr(4, 2);
      var formattedDate = abbreviatedWeekDay + ' ' + day + '/' + month;

      var psrLinks = {
        'Low': 'https://www.hko.gov.hk/common/images/PSRLow_50_light.png',
        'Medium Low': 'https://www.hko.gov.hk/common/images/PSRMediumLow_50_light.png',
        'Medium': 'https://www.hko.gov.hk/common/images/PSRMedium_50_light.png',
        'Medium High': 'https://www.hko.gov.hk/common/images/PSRMediumHigh_50_light.png',
        'High': 'https://www.hko.gov.hk/common/images/PSRHigh_50_light.png'
      };
      //console.log(WF.weatherForecast[i].PSR);
      var psrLink = psrLinks[WF.weatherForecast[i].PSR];
      dayweatherdata = [formattedDate, 
                        WF.weatherForecast[i].ForecastIcon, 
                        psrLink,
                        `${WF.weatherForecast[i].forecastMintemp.value}-${WF.weatherForecast[i].forecastMaxtemp.value}\u00B0C`,
                        `${WF.weatherForecast[i].forecastMinrh.value}-${WF.weatherForecast[i].forecastMaxrh.value}%`,
                        ];
      weatherData.push(dayweatherdata);
    };


    weatherData.forEach(function(data) {
      var cell = document.createElement('td');

      var weekday = document.createElement('p');
      weekday.textContent = data[0];
      cell.appendChild(weekday);
      
      var imageElement = document.createElement('img');
      imageElement.src = 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic' + data[1] +'.png';
      imageElement.style.width = '40px';
      imageElement.style.height = '40px';
      cell.appendChild(imageElement);
      var brElement = document.createElement('br');
      cell.appendChild(brElement);
      var psr = document.createElement('img');
      psr.src = data[2];
      psr.alt = 'PSR';
      psr.style.width = '40px';
      psr.style.height = '40px';
      cell.appendChild(psr);
      // data.forEach(function(value) {
      //   var paragraph = document.createElement('p');
      //   paragraph.textContent = value;
      //   cell.appendChild(paragraph);
      // });
      var temp = document.createElement('p');
      temp.textContent = data[3];
      cell.appendChild(temp);

      var humid = document.createElement('p');
      humid.textContent = data[4];
      cell.appendChild(humid);

      tableRow.appendChild(cell);
    });

    table.appendChild(tableRow);

    dayForecastDiv.appendChild(table);
})

fetch('https://dashboard.data.gov.hk/api/aqhi-individual?format=json')
//fetch('data/aqhi-individual-Oct4.json')
.then(response => response.json())
.then(data => {
  select3 = document.getElementById('station3');
  selectedvalue3 = select3.value;

  controller3 = document.createElement('option');
  controller3.value = '';
  controller3.textContent = 'Please select:';
  controller3.disabled = true;
  controller3.selected = true;
  select3.appendChild(controller3);
  createOptions(data);
  select3.addEventListener("change", function(event) {
    selectedvalue3 = event.target.value;
    gotair = findair(data, selectedvalue3);
    output3 = document.getElementById("output3");
    output3.innerHTML = gotair;
  });
})
.catch(error => {
  console.error('error:', error);
});

function createOptions(options) {

  airlist = [];
  options.forEach(option => {
    var valuesList = Object.values(option);
    airlist.push(valuesList);
  });
  airlist.sort(function(a, b) {
    return a[0].localeCompare(b[0]);
  });
  airlist.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = airlist[airlist.indexOf(option)][0];
    optionElement.textContent = airlist[airlist.indexOf(option)][0];
    select3.appendChild(optionElement);
  });
};

function findair(data,selectedvalue){

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (item["station"] === selectedvalue) {
      return 'Level: ' + item.aqhi + '<br>' +'Health Risk: ' + item.health_risk;
    }
  }
  return null;
};




function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject('Geolocation API is not available');
    }
  });
}

async function getLocation() {
  try {
    const position = await getCurrentPosition();
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  } catch (error) {
    console.log('Failed to retrieve location:', error);
  }
}

getLocation()
  .then(() => {
    // var mediaQuery = window.matchMedia('(max-width: 500px)');
    // if (mediaQuery.matches) {
    //   document.getElementById('tempquery').addEventListener('click', (evt) => {
    //     var element = document.getElementById("queryblock1");
    //     var computedStyle = window.getComputedStyle(element);
    //     var displayValue = computedStyle.getPropertyValue("display");
    //     if (displayValue == 'block') {
    //     return;
    //     }
    //     else{
    //       document.getElementById('queryblock2').style.setProperty('display', 'none','important');
    //       document.getElementById('Rainfall').style.setProperty("height", "8vh");
    //       document.getElementById('queryblock3').style.setProperty('display', 'none','important');
    //       document.getElementById('AirQuality').style.setProperty("height", "8vh");
    //       document.getElementById('queryblock1').style.setProperty('display', 'block','important');
    //       document.getElementById('Temperature').style.setProperty("height", "35vh");
    //     }
    //     });
    
    //     document.getElementById('rainquery').addEventListener('click', (evt) => {
    //       var element = document.getElementById("queryblock2");
    //       var computedStyle = window.getComputedStyle(element);
    //       var displayValue = computedStyle.getPropertyValue("display");
    //       if (displayValue == 'block') {
    //       return;
    //       }
    //       else{
    //         document.getElementById('queryblock1').style.setProperty('display', 'none','important');
    //         document.getElementById('Temperature').style.setProperty("height", "8vh","important");
    //         document.getElementById('queryblock3').style.setProperty('display', 'none','important');
    //         document.getElementById('AirQuality').style.setProperty("height", "8vh","important");
    //         document.getElementById('queryblock2').style.setProperty('display', 'block','important');
    //         document.getElementById('Rainfall').style.setProperty("height", "35vh");
    //       }
    //     });
    
    //     document.getElementById('airquery').addEventListener('click', (evt) => {
    //       var element = document.getElementById("queryblock3");
    //       var computedStyle = window.getComputedStyle(element);
    //       var displayValue = computedStyle.getPropertyValue("display");
    //       if (displayValue == 'block') {
    //       return;
    //       }
    //       else{
    //         document.getElementById('queryblock1').style.setProperty('display', 'none');
    //         document.getElementById('Temperature').style.setProperty("height", "8vh","important");
    //         document.getElementById('queryblock2').style.setProperty('display', 'none');
    //         document.getElementById('Rainfall').style.setProperty("height", "8vh","important");
    //         document.getElementById('queryblock3').style.setProperty('display', 'block','important');
    //         document.getElementById('AirQuality').style.setProperty("height", "35vh");
    //       }
    //     });
    //   }
    function fetchlocationinfo(){
      return fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&zoom=18&addressdetails=1&accept-language=en-US')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        var lodata = data.address; 
        if ('suburb' in lodata){
          suburb = lodata.suburb;
        }
        else if('borough' in lodata){
          suburb = lodata.borough;
        }
        else if('town' in lodata){
          suburb = lodata.town;
        }
        else{
          suburb = 'Unknown';
        }

        if ('city_district' in lodata){
          district = lodata.city_district;
        }
        else if(!('city_district' in lodata)){
          district = '';
          //console.log(lodata);
          for (var key in lodata) {
            if (lodata.hasOwnProperty(key)) {
              var value = lodata[key];
              if (value.includes('District')) {
                // var parts = value.split(' '); 
                // var result = parts.slice(0, -1).join(' ');
                district = value;
                break;
              }
            }
          }

        }
        else{
          district = 'Unknown';
        }
        //console.log(suburb, district);
        document.getElementById('currlocation').textContent = suburb + ', ' + district;
        return district;
      })
    };
    async function getminstation() {
      try {
        const result = await fetchlocationinfo();
        return result;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    getminstation()
    .then(districtawait => {
      function fetchData() {
        return fetch('https://ogciopsi.blob.core.windows.net/dataset/weather-station/weather-station-info.json')
          .then(response => response.json())
          .then(data => {
            return logdata(data);
          })
          .catch(error => {
            console.error('error:', error);
            throw error;
          });
      }
      
      function logdata(data) {
        var stationlist = [];
        data.forEach(function(item) {
          var station = [];
          const λ2 = item.longitude * Math.PI / 180;
          const φ2 = item.latitude * Math.PI / 180;
          const λ1 = longitude * Math.PI / 180;
          const φ1 = latitude * Math.PI / 180;
          const x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
          const y = (φ2 - φ1);
          const d = Math.sqrt(x * x + y * y);
          if (item.station_name_en == 'Tsuen Wan') {
            item.station_name_en = 'Tsuen Wan Ho Koon';
            station.push(item.station_name_en);
          } else {
            station.push(item.station_name_en);
          }
          station.push(d);
          stationlist.push(station);
        });
      
        var minstation = [stationlist[0][0], stationlist[0][1]];
        for (var i = 0; i < stationlist.length; i++) {
          if (stationlist[i][1] < minstation[1]) {
            minstation[0] = stationlist[i][0];
            minstation[1] = stationlist[i][1];
          }
        }
        
        return minstation;
      }
      
      // 调用 fetchData 函数并在外部访问内部变量
      async function getminstation1() {
        try {
          const result = await fetchData();
          return result;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
      
      getminstation1()
        .then(result => {
          fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
          .then(response => response.json())
          .then(data => {
            var selectElement1 = document.getElementById("culotemp");
            var selectElement2 = document.getElementById("culorain");
            var selectedvalue1 = result[0];
            var selectedvalue2 = districtawait;
            //console.log(selectedvalue2);
            //console.log(selectedvalue1);
            if (selectedvalue2 == 'Central and Western District'){
              selectedvalue2 = 'Central & Western District';
            }
            if(selectedvalue2 == 'Tuen Mun District'){
              selectedvalue2 = 'Tuen Mun';
            }
            if(selectedvalue2 == 'Yuen Long Park'){
              selectedvalue2 = 'Yuen Long';
            }
            if(selectedvalue2 == 'Sha Tin District'){
              selectedvalue2 = 'Sha Tin';
            }
            if(selectedvalue2 == 'Tai Po District'){
              selectedvalue2 = 'Tai Po';
            }
            if(selectedvalue2 == 'Tsuen Wan District'){
              selectedvalue2 = 'Tsuen Wan';
            }
            if(selectedvalue2 == 'Kwai Tsing District'){
              selectedvalue2 = 'Kwai Tsing';
            }
            if(selectedvalue2 == 'Wong Tai Sin District'){
              selectedvalue2 = 'Wong Tai Sin';
            }
            if(selectedvalue2 == 'Kwun Tong District'){
              selectedvalue2 = 'Kwun Tong';
            }
            if(selectedvalue2 == 'Sham Shui Po District'){
              selectedvalue2 = 'Sham Shui Po';
            }
            if(selectedvalue2 == 'Kowloon City District'){
              selectedvalue2 = 'Kowloon City';
            }
            if(selectedvalue2 == 'Wan Chai District'){
              selectedvalue2 = 'Wan Chai';
            }
            if(selectedvalue2 == 'Sai Kung District'){
              selectedvalue2 = 'Sai Kung';
            }
            gottemp = findtemp(data, selectedvalue1, content="temperature");
            var temp = document.createElement('div');
            temp.innerHTML = '<div style="font-size: 40px; display:inline;">' + gottemp+ '</div>';
            temp.innerHTML += '<div style="font-size: 20px; display:inline;">' + '\u00B0C' + '</div>';
            selectElement1.appendChild(temp);
            
            gotrain = findrain(data, selectedvalue2, content="rainfall");
            //console.log(gotrain);
            var rainfall = document.createElement('p');
            rainfall.innerHTML = '<div style="font-size: 40px;">' + gotrain + '</div>';
            //rainfall.innerHTML = '<div style="font-size: 40px;">' + '99' + '</div>';
            rainfall.innerHTML += '<div style="font-size: 20px;">' + "mm" + '</div>';
            selectElement2.appendChild(rainfall);
            var imageelement2 = document.createElement('img');
            imageelement2.src = 'images/rain-48.png';
            imageelement2.style.width = '20px';
            imageelement2.style.height = '20px';
            selectElement2.appendChild(imageelement2);
            });  
            function findtemp(data,selectedvalue,content){

              var data = data[content].data;
              for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if (item["place"] === selectedvalue) {
                  return item.value;
                }
              }
              return null;
            };
            function findrain(data,selectedvalue,content){
      
              var data = data[content].data;
              for (var i = 0; i < data.length; i++) {
                var item = data[i];
                //console.log(selectedvalue);
                //console.log(item["place"]);
                if (item["place"] === selectedvalue) {
                  //console.log(item["place"]);
                  return item.max;
                }
              }
              return null;
            };


    })
    function fetchaqir(){
      //return fetch('data/aqhi-individual-Oct4.json')
      return fetch('https://dashboard.data.gov.hk/api/aqhi-individual?format=json')
        .then(response => response.json())
        .then(data2 => {
          return data2;
        })
        .catch(error => {
          console.error('error:', error);
          throw error;
        });
    }

    async function getaqir() {
      try {
        const result = await fetchaqir();
        return result;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    getaqir()
    .then(data2 => {
      fetch('data/aqhi-station-info.json')
      .then(response => response.json())
      .then(aqhistation => {
        minaqhistation=logdata2(aqhistation);
        
        data2.forEach(function(item) {
          //console.log(minaqhistation[0]);
          if (item.station == minaqhistation[0]){
            //console.log(item.health_risk);
            if (item.health_risk == 'Low'){
              aqhiimg = 'images/aqhi-low.png';
              var imageelement = document.createElement('img');
              imageelement.src = aqhiimg;
              imageelement.style.width = '40px';
              imageelement.style.height = '40px';
              culoair.appendChild(imageelement);
            }
            else if (item.health_risk == 'Moderate'){
              aqhiimg = 'images/aqhi-moderate.png';
              var imageelement = document.createElement('img');
              imageelement.src = aqhiimg;
              imageelement.style.width = '40px';
              imageelement.style.height = '40px';
              culoair.appendChild(imageelement);
            }
            else if (item.health_risk == 'High'){
              aqhiimg = 'images/aqhi-high.png';
              var imageelement = document.createElement('img');
              imageelement.src = aqhiimg;
              imageelement.style.width = '40px';
              imageelement.style.height = '40px';
              culoair.appendChild(imageelement);
            }
            else if (item.health_risk == 'Serious'){
              aqhiimg = 'images/aqhi-serious.png';
              var imageelement = document.createElement('img');
              imageelement.src = aqhiimg;
              imageelement.style.width = '40px';
              imageelement.style.height = '40px';
              culoair.appendChild(imageelement); 
            }
            var aqhi = document.createElement('p');
            aqhi.innerHTML = item.aqhi +'<br>' + item.health_risk;
            culoair.appendChild(aqhi);
            //document.getElementById('culoair').innerHTML = item.aqhi;
          }
      })
      // .catch(error => {
      //   console.error('error:', error);
      //   throw error;
      // });
    })
    function logdata2(data) {
      var stationlist = [];
      data.forEach(function(item) {
        var station = [];
        const λ2 = item.lng * Math.PI / 180;
        const φ2 = item.lat * Math.PI / 180;
        const λ1 = longitude * Math.PI / 180;
        const φ1 = latitude * Math.PI / 180;
        const x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
        const y = (φ2 - φ1);
        const d = Math.sqrt(x * x + y * y);
        station.push(item.station);
        station.push(d);
        stationlist.push(station);
      });
      var minstation = [stationlist[0][0], stationlist[0][1]];
      for (var i = 0; i < stationlist.length; i++) {
        if (stationlist[i][1] < minstation[1]) {
          minstation[0] = stationlist[i][0];
          minstation[1] = stationlist[i][1];
        }
      }
      
      return minstation;
    }
    // let selection1 = 'tempquery';
    // let selected1 = 'queryblock1';

    // //let select = document.querySelectorAll("#Temperature","#Rainfall","#AirQuality");
    // let select1 = document.getElementById('tempquery');

    // document.getElementById('tempquery').addEventListener('click', (evt) => {
    //   var element = document.getElementById("queryblock1");
    //   var computedStyle = window.getComputedStyle(element);
    //   var displayValue = computedStyle.getPropertyValue("display");
    //   if (displayValue == 'block') {
    //   return;
    //   }
    //   else{
    //     document.getElementById('queryblock2').style.setProperty('display', 'none','important');
    //     document.getElementById('Rainfall').style.setProperty("height", "8vh","important");
    //     document.getElementById('queryblock3').style.setProperty('display', 'none','important');
    //     document.getElementById('AirQuality').style.setProperty("height", "8vh","important");
    //     document.getElementById('queryblock1').style.setProperty('display', 'block','important');
    //     document.getElementById('Temperature').style.setProperty("height", "35vh","important");
    //   }
    //   });
  
    //   document.getElementById('rainquery').addEventListener('click', (evt) => {
    //     var element = document.getElementById("queryblock2");
    //     var computedStyle = window.getComputedStyle(element);
    //     var displayValue = computedStyle.getPropertyValue("display");
    //     if (displayValue == 'block') {
    //     return;
    //     }
    //     else{
    //       document.getElementById('queryblock1').style.setProperty('display', 'none','important');
    //       document.getElementById('Temperature').style.setProperty("height", "8vh","important");
    //       document.getElementById('queryblock3').style.setProperty('display', 'none','important');
    //       document.getElementById('AirQuality').style.setProperty("height", "8vh","important");
    //       document.getElementById('queryblock2').style.setProperty('display', 'block','important');
    //       document.getElementById('Rainfall').style.setProperty("height", "35vh","important");
    //     }
    //   });
  
    //   document.getElementById('airquery').addEventListener('click', (evt) => {
    //     var element = document.getElementById("queryblock3");
    //     var computedStyle = window.getComputedStyle(element);
    //     var displayValue = computedStyle.getPropertyValue("display");
    //     if (displayValue == 'block') {
    //     return;
    //     }
    //     else{
    //       document.getElementById('queryblock1').style.setProperty('display', 'none','important');
    //       document.getElementById('Temperature').style.setProperty("height", "8vh","important");
    //       document.getElementById('queryblock2').style.setProperty('display', 'none','important');
    //       document.getElementById('Rainfall').style.setProperty("height", "8vh","important");
    //       document.getElementById('queryblock3').style.setProperty('display', 'block','important');
    //       document.getElementById('AirQuality').style.setProperty("height", "35vh","important");
    //     }
    //   });
    // switch (evt.target.id) {
    // case 'Temperature':
    // document.getElementById(selected).style.display = 'none';
    // selection = 'Temperature';
    // selected = 'queryblock1';
    // document.getElementById('queryblock1').style.display = 'block';
    // break;
    // case 'Rainfall':
    // document.getElementById(selected).style.display = 'none';
    // selection = 'Rainfall';
    // selected = 'queryblock2';
    // document.getElementById('queryblock2').style.display = 'block';
    // break;
    // case 'airquery':
    // document.getElementById(selected).style.setProperty('display', 'none','important');
    // document.getElementById(selection).style.setProperty("height", "8%","important");
    // selection = 'AirQuality';
    // selected = 'queryblock3';
    // document.getElementById('queryblock3').style.setProperty('display', 'block','important');
    // document.getElementById(selection).style.setProperty("height", "35vh","important");
    // break;
    // }
    //});

    })
    .catch(error => {
      console.log(error);
    });
  })

  //   fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&zoom=18&addressdetails=1&accept-language=en-US')
  //   .then(response => response.json())
  //   .then(data => {
  //     var lodata = data.address; 
  //     if ('suburb' in lodata){
  //       suburb = lodata.suburb;
  //     }
  //     else if('borough_field' in lodata){
  //       suburb = lodata.borough_field;
  //     }
  //     else if('town_field' in lodata){
  //       suburb = lodata.town_field;
  //     }
  //     else{
  //       return suburb = 'Unknown';
  //     }

  //     if ('city_district' in lodata){
  //       district = lodata.city_district;
  //     }
  //     else if ('borough_field' in lodata){
  //       district = lodata.borough_field;
  //     }
  //     else if('town_field' in lodata){
  //       district = lodata.town_field;
  //     }
  //     else{
  //       return district = 'Unknown';
  //     }
      
  //     document.getElementById('currlocation').textContent = suburb + ', ' + district;
  //     //console.log(suburb, district);
  //   })
  //   .catch(error => {
  //     console.error('error:', error);
  //   });
    
  //   function fetchData() {
  //     return fetch('https://ogciopsi.blob.core.windows.net/dataset/weather-station/weather-station-info.json')
  //       .then(response => response.json())
  //       .then(data => {
  //         return logdata(data);
  //       })
  //       .catch(error => {
  //         console.error('error:', error);
  //         throw error;
  //       });
  //   }
    
  //   function logdata(data) {
  //     var stationlist = [];
  //     data.forEach(function(item) {
  //       var station = [];
  //       const λ2 = item.longitude * Math.PI / 180;
  //       const φ2 = item.latitude * Math.PI / 180;
  //       const λ1 = longitude * Math.PI / 180;
  //       const φ1 = latitude * Math.PI / 180;
  //       const x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
  //       const y = (φ2 - φ1);
  //       const d = Math.sqrt(x * x + y * y);
  //       if (item.station_name_en == 'Tsuen Wan') {
  //         item.station_name_en = 'Tsuen Wan Ho Koon';
  //         station.push(item.station_name_en);
  //       } else {
  //         station.push(item.station_name_en);
  //       }
  //       station.push(d);
  //       stationlist.push(station);
  //     });
    
  //     var minstation = [stationlist[0][0], stationlist[0][1]];
  //     for (var i = 0; i < stationlist.length; i++) {
  //       if (stationlist[i][1] < minstation[1]) {
  //         minstation[0] = stationlist[i][0];
  //         minstation[1] = stationlist[i][1];
  //       }
  //     }
      
  //     return minstation;
  //   }
    
  //   // 调用 fetchData 函数并在外部访问内部变量
  //   async function getminstation() {
  //     try {
  //       const result = await fetchData();
  //       return result;
  //     } catch (error) {
  //       console.error(error);
  //       throw error;
  //     }
  //   }
    
  //   getminstation()
  //     .then(result => {
  //       fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
  //       .then(response => response.json())
  //       .then(data => {
  //         var selectElement1 = document.getElementById("culotemp");
  //         var selectElement2 = document.getElementById("culorain");
  //         var selectedvalue1 = result[0];
  //         var output = document.getElementById("currlocation");
  //         const pText = output.textContent;
  //         const commaIndex = pText.indexOf(","); // 查找逗号的位置
  //         const extracted = pText.substring(commaIndex + 2);
  //         var selectedvalue2 = extracted;
  //         console.log(selectedvalue2);
  //         gottemp = findtemp(data, selectedvalue1, content="temperature",);
  //         selectElement1.innerHTML = gottemp+'\u00B0C';
  //         gotrain = findrain(data, selectedvalue2, content="rainfall");
  //         selectElement2.innerHTML = gotrain+"mm";
  //         });  
  //         function findtemp(data,selectedvalue,content){

  //           var data = data[content].data;
  //           for (var i = 0; i < data.length; i++) {
  //             var item = data[i];
  //             if (item["place"] === selectedvalue) {
  //               return item.value;
  //             }
  //           }
  //           return null;
  //         };
  //         function findrain(data,selectedvalue,content){
    
  //           var data = data[content].data;
  //           for (var i = 0; i < data.length; i++) {
  //             var item = data[i];
  //             if (item["place"] === selectedvalue) {
  //               return item.max;
  //             }
  //           }
  //           return null;
  //         };
  //       })
  //     .catch(error => {
  //       console.log(error);
  //     });

});



