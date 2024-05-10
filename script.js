// script.js
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city !== '') {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const apiKey = '6ae523a31586355bf9bc319fe7eed48d'
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city !== '') {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const apiKey = '6ae523a31586355bf9bc319fe7eed48d'; // Replace with your API key from OpenWeatherMap or any other weather API
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.textContent = 'Error: City not found';
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  const weatherHTML = `
    <p>City: ${cityName}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${weatherDescription}</p>
  `;

  weatherInfo.innerHTML = weatherHTML;
}

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.textContent = 'Error: City not found';
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  const weatherHTML = `
    <p>City: ${cityName}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${weatherDescription}</p>
  `;

  weatherInfo.innerHTML = weatherHTML;
}
