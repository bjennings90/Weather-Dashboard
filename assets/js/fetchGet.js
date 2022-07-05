var key = 'b9393b6852363e8a579f24ca8fe9f2bd';
var userSearchVal = document.getElementById('search');
var cityName = userSearchVal.value;
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b9393b6852363e8a579f24ca8fe9f2bd";
var searchFormEl = document.querySelector('#search-form');
var dataContainer = document.getElementById('data-container');
var forcastBlocks = document.getElementById('forcastBlocks');
var mainData = document.getElementById('main-data');
var mainTemp = document.getElementById('main-temp');
var mainWind = document.getElementById('main-wind');
var mainHumidity = document.getElementById('main-humidity');
var mainUV = document.getElementById('main-UV');
var currentTime = document.getElementById("currentDay");


function formSubmitHandler(event) {
  event.preventDefault();
  fetch(currentWeatherUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      weatherContainer(data);
// console.log(data.main.temp);
// console.log(data.sys.timezone);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var fiveDayWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b9393b6852363e8a579f24ca8fe9f2bd`;
      fetch(fiveDayWeatherUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
      // use data to make other api call
    })
    .catch((err) => console.log(err));
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

function weatherContainer(data) {
    mainData.textContent = data.name
    
    mainTemp.textContent = data.main.temp
    mainWind.textContent = data.wind.speed
    mainHumidity.textContent = data.main.humidity

}
searchFormEl.addEventListener('submit', formSubmitHandler);