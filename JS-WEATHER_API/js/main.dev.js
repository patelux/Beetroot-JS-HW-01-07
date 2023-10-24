"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var weatherData = localStorage.getItem('weatherData');
  var lastFetchTime = localStorage.getItem('lastFetchTime');
  var MY_API_KEY = '5be78af818ee7dcfc981e54df16594ea';
  var city = 'Kharkiv';
  var API_URL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(MY_API_KEY); // отримання занних та запис у локалсторедж

  function fetchWeather() {
    fetch(API_URL).then(function (response) {
      return response.json();
    }).then(function (data) {
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('lastFetchTime', new Date().getTime());
      markupWeather(data);
    })["catch"](function (error) {
      return console.error('Error fetching weather data:', error);
    });
  }

  if (weatherData && lastFetchTime) {
    var currentTime = new Date().getTime();
    var timeDiff = (currentTime - parseInt(lastFetchTime)) / (1000 * 60 * 60);

    if (timeDiff < 2) {
      markupWeather(JSON.parse(weatherData));
    } else {
      fetchWeather();
    }
  } else {
    fetchWeather();
  } // кельвін → цельсій


  function temperatureInCelcius(temp) {
    return Math.round(temp - 273.15);
  } // розмітка


  function markupWeather(data) {
    var html = '';
    var _data$weather$ = data.weather[0],
        description = _data$weather$.description,
        icon = _data$weather$.icon;
    var _data$main = data.main,
        feels_like = _data$main.feels_like,
        temp = _data$main.temp;
    var currentCity = data.name;
    var temperature = temperatureInCelcius(temp);
    var feelsLike = temperatureInCelcius(feels_like);
    var iconUrl = "https://openweathermap.org/img/wn/".concat(icon, "@2x.png");
    html = "<div class=\"forecast_item\"><div class=\"img-wrapper\"><img id=\"weather-icon\" src=\"".concat(iconUrl, "\" alt=\"Weather Icon\"></div><p class=\"forecast_item-description\" id=\"weather-description\">\u041F\u043E\u0433\u043E\u0434\u0430: ").concat(description, "</p><p class=\"forecast_item-capital\" id=\"city\">\u041C\u0456\u0441\u0442\u043E: ").concat(currentCity, "</p><p class=\"forecast_item-temperature\" id=\"temperature\">\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ").concat(temperature, "\xB0C</p><p class=\"forecast_item-temperature\" id=\"feels-like\">\u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A: ").concat(feelsLike, "\xB0C</p></div>");
    document.getElementById('forecsat_list').innerHTML = html;
  }
});