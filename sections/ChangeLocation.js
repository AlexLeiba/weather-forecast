const timisoaraButton = document.querySelector(".timisoara");
const oradeaButton = document.querySelector(".oradea");
const bucurestiButton = document.querySelector(".bucuresti");
const iasiButton = document.querySelector(".iasi");
const brasovButton = document.querySelector(".brasov");
const sibiuButton = document.querySelector(".sibiu");
const baiaMareButton = document.querySelector(".baiaMare");
const constantaButton = document.querySelector(".constanta");
const clujButton = document.querySelector(".cluj");

// Functia primeste ca parametru orasul obtinut la eventul (click)
function updateCity(city) {
  const currentCity = document.querySelector(".currentCity");

  currentCity.innerHTML = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  localStorage.setItem("city", city);
}

timisoaraButton.addEventListener("click", function () {
  updateCity("Timișoara");
});

oradeaButton.addEventListener("click", function () {
  updateCity("Oradea");
});

bucurestiButton.addEventListener("click", function () {
  updateCity("București");
});

iasiButton.addEventListener("click", function () {
  updateCity("Iași");
});

brasovButton.addEventListener("click", function () {
  updateCity("Brașov");
});

sibiuButton.addEventListener("click", function () {
  updateCity("Sibiu");
});

baiaMareButton.addEventListener("click", function () {
  updateCity("Baia Mare");
});

clujButton.addEventListener("click", function () {
  updateCity("Cluj-Napoca");
});

constantaButton.addEventListener("click", function () {
  updateCity("Constanța");
});
