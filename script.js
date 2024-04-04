// Add your JavaScript code here
const cityDropdown = document.getElementById('city-dropdown');
const getWeatherButton = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');
const apiKey = 'e8cf8e1b998db42f9ef9da4d19e99c59'; // Replace with your Weather Stack API key

getWeatherButton.addEventListener('click', () => {
  const selectedCity = cityDropdown.value;
  fetchWeather(selectedCity);
});

function fetchWeather(city) {
  var url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.current.temperature;
      const description = data.current.weather_descriptions[0];
      weatherInfo.innerHTML = `The temperature in ${city} is ${temperature}°C with ${description}.`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = 'An error occurred while fetching weather data.';
    });
}
