var key = "b9393b6852363e8a579f24ca8fe9f2bd";
var userSearchVal = document.getElementById("search");
var searchFormEl = document.querySelector("#search-form");
var dataContainer = document.getElementById("data-container");
var forecastBlocks = document.getElementById("forecast-blocks");
var forecastArray = [1, 2, 3, 4, 5];
var mainData = document.getElementById("main-data");
var mainTemp = document.getElementById("main-temp");
var mainWind = document.getElementById("main-wind");
var mainHumidity = document.getElementById("main-humidity");
var mainUV = document.getElementById("main-uv");

//display search for cities
function formSubmitHandler(event) {
  event.preventDefault();
  var cityName = userSearchVal.value;
  var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b9393b6852363e8a579f24ca8fe9f2bd";
  fetch(currentWeatherUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      weatherContainer(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var fiveDayWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b9393b6852363e8a579f24ca8fe9f2bd`;
      console.log(fiveDayWeatherUrl);

      fetch(fiveDayWeatherUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          uvi(data);
          console.log(uvi(data));
          dayOneBlock(data);
          dayTwoBlock(data);
          dayThreeBlock(data);
          dayFourBlock(data);
          dayFiveBlock(data);
        });
    })
    .catch((err) => console.log(err));

// date format
  function date(offset) {
    let date = moment(new Date()).add(offset, "days").format("MM/DD/YYYY").toString();
    return date;
  }

//display current city data
  function weatherContainer(data) {
    mainData.textContent = data.name + "(" + date(0) + ")";
    mainTemp.textContent = "Temp: " + data.main.temp;
    mainWind.textContent = "Wind: " + data.wind.speed;
    mainHumidity.textContent = "Humidity: " + data.main.humidity;
  }

  function uvi(data) {
    mainUV.textContent = "UV Index: " + data.current.uvi;
    
    if (data.current.uvi < 3) {
      mainUV.classList.add("favorable");
    }
    if (data.current.uvi <= 7) {
      mainUV.classList.add("moderate");
    } else {
      mainUV.classList.add("severe");
    }
  }


  //display 5 day forecast
  function dayOneBlock(data) {
    let dayOne = document.getElementById('dayOneDate');
    let dayOneTemp = document.getElementById('main-temp_1');
    let dayOneWind = document.getElementById('main-wind_1');
    let dayOneHumidity = document.getElementById('main-humidity_1');
   dayOne.textContent = " (" + date(1) + ")";
   dayOneTemp.textContent = "Temp: " + data.current.temp;
    dayOneWind.textContent = "Wind: " + data.current.wind_speed;
    dayOneHumidity.textContent = "Humidity: " + data.current.humidity;
  }

  function dayTwoBlock(data) {
    let dayTwo = document.getElementById('dayTwoDate');
    let dayTwoTemp = document.getElementById('main-temp_2');
    let dayTwoWind = document.getElementById('main-wind_2');
    let dayTwoHumidity = document.getElementById('main-humidity_2');
    dayTwo.textContent = " (" + date(2) + ")";
   dayTwoTemp.textContent = "Temp: " + data.current.temp;
    dayTwoWind.textContent = "Wind: " + data.current.wind_speed;
    dayTwoHumidity.textContent = "Humidity: " + data.current.humidity;
  }

  function dayThreeBlock(data) {
    let dayThree = document.getElementById('dayThreeDate');
    let dayThreeTemp = document.getElementById('main-temp_3');
    let dayThreeWind = document.getElementById('main-wind_3');
    let dayThreeHumidity = document.getElementById('main-humidity_3');
    dayThree.textContent = " (" + date(3) + ")";
   dayThreeTemp.textContent = "Temp: " + data.current.temp;
    dayThreeWind.textContent = "Wind: " + data.current.wind_speed;
    dayThreeHumidity.textContent = "Humidity: " + data.current.humidity;
  }

  function dayFourBlock(data) {
    let dayFour = document.getElementById('dayFourDate');
    let dayFourTemp = document.getElementById('main-temp_4');
    let dayFourWind = document.getElementById('main-wind_4');
    let dayFourHumidity = document.getElementById('main-humidity_4');
    dayFour.textContent = " (" + date(4) + ")";
   dayFourTemp.textContent = "Temp: " + data.current.temp;
    dayFourWind.textContent = "Wind: " + data.current.wind_speed;
    dayFourHumidity.textContent = "Humidity: " + data.current.humidity;
  }

  function dayFiveBlock(data) {
    let dayFive = document.getElementById('dayFiveDate');
    let dayFiveTemp = document.getElementById('main-temp_5');
    let dayFiveWind = document.getElementById('main-wind_5');
    let dayFiveHumidity = document.getElementById('main-humidity_5');
    dayFive.textContent = " (" + date(5) + ")";
   dayFiveTemp.textContent = "Temp: " + data.current.temp;
    dayFiveWind.textContent = "Wind: " + data.current.wind_speed;
    dayFiveHumidity.textContent = "Humidity: " + data.current.humidity;
  }
}
searchFormEl.addEventListener("submit", formSubmitHandler);
