const API_KEY = "e0bf950a19e2f5800bf00b9d91316fc2";

function getCurrentWeatherCity(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
}
