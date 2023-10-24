document.addEventListener('DOMContentLoaded', function () {
    const weatherData = localStorage.getItem('weatherData');
    const lastFetchTime = localStorage.getItem('lastFetchTime');
    const MY_API_KEY = '5be78af818ee7dcfc981e54df16594ea';
    const city = 'Kharkiv';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}`;

    // отримання занних та запис у локалсторедж
    function fetchWeather() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('weatherData', JSON.stringify(data));
                localStorage.setItem('lastFetchTime', new Date().getTime());
                markupWeather(data);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    if (weatherData && lastFetchTime) {
        const currentTime = new Date().getTime();
        const timeDiff = (currentTime - parseInt(lastFetchTime)) / (1000 * 60 * 60);
        if (timeDiff < 2) {
        markupWeather(JSON.parse(weatherData));
    } else {
        fetchWeather();
    }
} else {
    fetchWeather();
}

// кельвін → цельсій
function temperatureInCelcius(temp) {
    return Math.round(temp - 273.15);
}
// розмітка
function markupWeather(data) {

    let html = '';
    const {
        description,
        icon
    } = data.weather[0];
    const {
        feels_like,
        temp
    } = data.main;
    const currentCity = data.name;
    const temperature = temperatureInCelcius(temp);
    const feelsLike = temperatureInCelcius(feels_like);
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    html = `<div class="forecast_item"><div class="img-wrapper"><img id="weather-icon" src="${iconUrl}" alt="Weather Icon"></div><p class="forecast_item-description" id="weather-description">Погода: ${description}</p><p class="forecast_item-capital" id="city">Місто: ${currentCity}</p><p class="forecast_item-temperature" id="temperature">Температура: ${temperature}°C</p><p class="forecast_item-temperature" id="feels-like">відчувається як: ${feelsLike}°C</p></div>`;

    document.getElementById('forecsat_list').innerHTML = html;
}
});