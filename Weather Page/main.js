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
        warningMessage.style.display = 'none';
      }
    });

   });

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
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    .then(response => response.json())
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




// ============ 重构的工具函数 ============

// 带超时和重试的fetch函数
async function fetchWithTimeoutAndRetry(url, options = {}, timeout = 8000, maxRetries = 2) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.warn(`Attempt ${attempt + 1} failed for ${url}:`, error.message);
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries + 1} attempts: ${error.message}`);
      }
      // 指数退避
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
    }
  }
}

// 重构的地理位置获取函数（带超时控制）
function getCurrentPositionWithTimeout(timeout = 10000) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation API is not available'));
      return;
    }
    
    const options = {
      timeout: timeout,
      maximumAge: 300000, // 5分钟内的缓存位置可用
      enableHighAccuracy: false // 降低精度要求以提高速度
    };
    
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

// 显示加载状态
function showLoadingState(elementId, message = 'Loading...') {
  const element = document.getElementById(elementId);
  if (element) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.innerHTML = `<div style="text-align: center; padding: 10px; color: #666;">${message}</div>`;
    element.appendChild(loadingDiv);
  }
}

// 隐藏加载状态
function hideLoadingState(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const loadingElements = element.querySelectorAll('.loading-indicator');
    loadingElements.forEach(el => el.remove());
  }
}

// 显示错误信息
function showErrorMessage(message, elementId = null) {
  console.error('Weather App Error:', message);
  if (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = `<div style="color: red; text-align: center; padding: 10px;">${message}</div>`;
    }
  }
}

function getCurrentPosition() {
  return getCurrentPositionWithTimeout();
}

// ============ 重构的API调用函数 ============

// 获取位置信息
async function getLocationInfo(lat, lon) {
  const response = await fetchWithTimeoutAndRetry(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1&accept-language=en-US`
  );
  return response.json();
}

// 获取当前天气数据
async function getCurrentWeatherData() {
  const response = await fetchWithTimeoutAndRetry(
    'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en'
  );
  return response.json();
}

// 获取天气预报数据
async function getForecastData() {
  const response = await fetchWithTimeoutAndRetry(
    'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en'
  );
  return response.json();
}

// 获取天气站信息
async function getWeatherStations() {
  const response = await fetchWithTimeoutAndRetry(
    'https://ogciopsi.blob.core.windows.net/dataset/weather-station/weather-station-info.json'
  );
  return response.json();
}

// 获取空气质量数据
async function getAirQualityData() {
  const response = await fetchWithTimeoutAndRetry(
    'https://dashboard.data.gov.hk/api/aqhi-individual?format=json'
  );
  return response.json();
}

// 获取空气质量站点信息
async function getAQHIStationInfo() {
  try {
    const response = await fetchWithTimeoutAndRetry(
      'data/aqhi-station-info.json'
    );
    return response.json();
  } catch (error) {
    console.warn('Failed to load AQHI station info:', error.message);
    // 返回默认的站点信息作为后备方案
    return {
      stations: [
        {
          id: "central",
          name: "Central",
          name_zh: "中环",
          location: { lat: 22.2819, lng: 114.1583 },
          region: "Hong Kong Island"
        }
      ],
      last_updated: new Date().toISOString()
    };
  }
}

// 处理地址数据
function processLocationData(locationData) {
  const lodata = locationData.address;
  let suburb, district;
  
  // 处理suburb
  if ('suburb' in lodata) {
    suburb = lodata.suburb;
  } else if ('borough' in lodata) {
    suburb = lodata.borough;
  } else if ('town' in lodata) {
    suburb = lodata.town;
  } else {
    suburb = 'Unknown';
  }
  
  // 处理district
  if ('city_district' in lodata) {
    district = lodata.city_district;
  } else {
    district = '';
    for (var key in lodata) {
      if (lodata.hasOwnProperty(key)) {
        var value = lodata[key];
        if (value.includes('District')) {
          district = value;
          break;
        }
      }
    }
    if (!district) district = 'Unknown';
  }
  
  return { suburb, district };
}

// 查找最近的天气站
function findNearestWeatherStation(stations, position) {
  const { latitude, longitude } = position.coords;
  let minStation = null;
  let minDistance = Infinity;
  
  stations.forEach(function(item) {
    const λ2 = item.longitude * Math.PI / 180;
    const φ2 = item.latitude * Math.PI / 180;
    const λ1 = longitude * Math.PI / 180;
    const φ1 = latitude * Math.PI / 180;
    const x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
    const y = (φ2 - φ1);
    const distance = Math.sqrt(x * x + y * y);
    
    if (distance < minDistance) {
      minDistance = distance;
      let stationName = item.station_name_en;
      if (stationName === 'Tsuen Wan') {
        stationName = 'Tsuen Wan Ho Koon';
      }
      minStation = { name: stationName, distance: distance };
    }
  });
  
  return minStation;
}

// 查找最近的空气质量站
function findNearestAQHIStation(stations, position) {
  const { latitude, longitude } = position.coords;
  let minStation = null;
  let minDistance = Infinity;
  
  stations.forEach(function(item) {
    const λ2 = item.lng * Math.PI / 180;
    const φ2 = item.lat * Math.PI / 180;
    const λ1 = longitude * Math.PI / 180;
    const φ1 = latitude * Math.PI / 180;
    const x = (λ2 - λ1) * Math.cos((φ1 + φ2) / 2);
    const y = (φ2 - φ1);
    const distance = Math.sqrt(x * x + y * y);
    
    if (distance < minDistance) {
      minDistance = distance;
      minStation = { name: item.station, distance: distance };
    }
  });
  
  return minStation;
}

// 标准化地区名称
function normalizeDistrictName(district) {
  const districtMap = {
    'Central and Western District': 'Central & Western District',
    'Tuen Mun District': 'Tuen Mun',
    'Yuen Long Park': 'Yuen Long',
    'Sha Tin District': 'Sha Tin',
    'Tai Po District': 'Tai Po',
    'Tsuen Wan District': 'Tsuen Wan',
    'Kwai Tsing District': 'Kwai Tsing',
    'Wong Tai Sin District': 'Wong Tai Sin',
    'Kwun Tong District': 'Kwun Tong',
    'Sham Shui Po District': 'Sham Shui Po',
    'Kowloon City District': 'Kowloon City',
    'Wan Chai District': 'Wan Chai',
    'Sai Kung District': 'Sai Kung',
    'Yau Tsim Mong District': 'Yau Tsim Mong',
    'Southern District': 'Southern',
    'Eastern District': 'Eastern',
    'Islands District': 'Islands',
    'North District': 'North'
  };
  
  return districtMap[district] || district;
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

// ============ 重构后的主函数：消除回调地狱 ============

// 主要的初始化函数，使用async/await重构
async function initializeWeatherPage() {
  try {
    // 第1步：显示加载状态
    showLoadingState('currlocation', '正在获取位置...');
    
    // 第2步：获取用户位置
    const position = await getCurrentPositionWithTimeout();
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    
    // 第3步：并行获取基础数据
    showLoadingState('culotemp', '正在加载天气数据...');
    showLoadingState('culorain', '正在加载降雨数据...');
    showLoadingState('culoair', '正在加载空气质量...');
    
    const [locationData, weatherStations, currentWeather, aqhiStations] = await Promise.allSettled([
      getLocationInfo(latitude, longitude),
      getWeatherStations(),
      getCurrentWeatherData(),
      getAQHIStationInfo()
    ]);
    
    // 第4步：处理位置数据
    if (locationData.status === 'fulfilled') {
      const location = processLocationData(locationData.value);
      document.getElementById('currlocation').textContent = location.suburb + ', ' + location.district;
      hideLoadingState('currlocation');
      
      // 第5步：查找最近的天气站
      if (weatherStations.status === 'fulfilled') {
        const nearestWeatherStation = findNearestWeatherStation(weatherStations.value, position);
        
        // 第6步：获取特定位置的天气数据
        if (currentWeather.status === 'fulfilled' && nearestWeatherStation) {
          const normalizedDistrict = normalizeDistrictName(location.district);
          
          // 查找温度数据
          const tempData = findDataByPlace(currentWeather.value, nearestWeatherStation.name, 'temperature');
          if (tempData) {
            updateTemperatureDisplay(tempData.value);
            hideLoadingState('culotemp');
          } else {
            showErrorMessage('温度数据不可用', 'culotemp');
          }
          
          // 查找降雨数据
          const rainData = findDataByPlace(currentWeather.value, normalizedDistrict, 'rainfall');
          if (rainData) {
            updateRainfallDisplay(rainData.max);
            hideLoadingState('culorain');
          } else {
            showErrorMessage('降雨数据不可用', 'culorain');
          }
        }
      }
      
      // 第7步：处理空气质量数据
      if (aqhiStations.status === 'fulfilled') {
        await processAirQualityData(aqhiStations.value, position);
      } else {
        console.warn('AQHI stations data failed, but fallback data should be available');
        // 由于我们在getAQHIStationInfo中提供了fallback，这里应该很少发生
        showErrorMessage('空气质量站点信息加载中...', 'culoair');
        // 尝试使用默认数据重新处理
        try {
          const fallbackStations = await getAQHIStationInfo();
          await processAirQualityData(fallbackStations, position);
        } catch (error) {
          showErrorMessage('空气质量数据暂时不可用', 'culoair');
        }
      }
    } else {
      showErrorMessage('位置信息获取失败', 'currlocation');
    }
    
  } catch (error) {
    console.error('Weather page initialization failed:', error);
    showErrorMessage('天气数据加载失败，请刷新页面重试');
  }
}

// 处理空气质量数据
async function processAirQualityData(aqhiStations, position) {
  try {
    const nearestAQHIStation = findNearestAQHIStation(aqhiStations, position);
    
    if (nearestAQHIStation) {
      const aqhiData = await getAirQualityData();
      
      const stationData = aqhiData.find(item => item.station === nearestAQHIStation.name);
      
      if (stationData) {
        updateAirQualityDisplay(stationData);
        hideLoadingState('culoair');
      } else {
        showErrorMessage('空气质量数据不可用', 'culoair');
      }
    }
  } catch (error) {
    console.error('Air quality data processing failed:', error);
    showErrorMessage('空气质量数据加载失败', 'culoair');
  }
}

// 更新温度显示（保持原有样式）
function updateTemperatureDisplay(temperature) {
  const culotemp = document.getElementById('culotemp');
  culotemp.innerHTML = '';
  
  const temp = document.createElement('div');
  temp.innerHTML = '<div style="font-size: 40px; display:inline;">' + temperature + '</div>';
  temp.innerHTML += '<div style="font-size: 20px; display:inline;">' + '\u00B0C' + '</div>';
  culotemp.appendChild(temp);
}

// 更新降雨量显示（保持原有样式）
function updateRainfallDisplay(rainfall) {
  const culorain = document.getElementById('culorain');
  culorain.innerHTML = '';
  
  const rainfallDiv = document.createElement('p');
  rainfallDiv.innerHTML = '<div style="font-size: 40px;">' + rainfall + '</div>';
  rainfallDiv.innerHTML += '<div style="font-size: 20px;">' + "mm" + '</div>';
  culorain.appendChild(rainfallDiv);
  
  const imageElement = document.createElement('img');
  imageElement.src = 'images/rain-48.png';
  imageElement.style.width = '20px';
  imageElement.style.height = '20px';
  culorain.appendChild(imageElement);
}

// 更新空气质量显示
function updateAirQualityDisplay(aqhiData) {
  const culoair = document.getElementById('culoair');
  
  // 清空现有内容
  culoair.innerHTML = '';
  
  // 根据健康风险等级选择图标
  const riskImageMap = {
    'Low': 'images/aqhi-low.png',
    'Moderate': 'images/aqhi-moderate.png',
    'High': 'images/aqhi-high.png',
    'Serious': 'images/aqhi-serious.png'
  };
  
  const imageSrc = riskImageMap[aqhiData.health_risk];
  if (imageSrc) {
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.style.width = '40px';
    imageElement.style.height = '40px';
    culoair.appendChild(imageElement);
  }
  
  // 添加AQHI值和健康风险文本
  const aqhiText = document.createElement('p');
  aqhiText.innerHTML = aqhiData.aqhi + '<br>' + aqhiData.health_risk;
  culoair.appendChild(aqhiText);
}

// 在数据中查找特定地点的信息
function findDataByPlace(weatherData, place, dataType) {
  if (!weatherData[dataType] || !weatherData[dataType].data) {
    return null;
  }
  
  for (let i = 0; i < weatherData[dataType].data.length; i++) {
    const item = weatherData[dataType].data[i];
    if (item.place === place) {
      return item;
    }
  }
  return null;
}

// 启动应用 - 替换原来的getLocation()调用
document.addEventListener('DOMContentLoaded', function() {
  // 延迟一点启动，确保DOM完全加载
  setTimeout(initializeWeatherPage, 100);
});
