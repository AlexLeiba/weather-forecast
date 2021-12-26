// Din acest fisier porneste aplicatia
const currentCity = document.querySelector(".currentCity");
let localValue = localStorage.getItem("city");

// Daca localStorage = null, inseamna ca nu avem nimic in localStorage
if (!localValue) {
  localStorage.setItem("city", "București");

  // Sa se afiseze orasul by default.
  displayCurrentWeather("București");
  displayWeatherForecast("București");
  currentCity.innerHTML = "București";
} else {
  // Orasul by default, va veni direct din localStorage
  displayCurrentWeather(localValue);
  displayWeatherForecast(localValue);
  currentCity.innerHTML = localValue;
}
