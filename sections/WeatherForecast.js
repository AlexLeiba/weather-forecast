function displayWeatherForecast(city) {
  const forecastWeather = document.querySelector(".weather-forecast");

  const weatherForecastEndpoint = getForecastEndpoint(city);
  fetch(weatherForecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      //   La fiecare click (apelare de functie), html-ul selectat va goli ce a avut in el inainte sa afiseze din nou datele venite de la server(pentru a nu concatena la   nesfirsit datele intre ele)
      forecastWeather.innerHTML = "";

      // Cream un obiect gol, in care vom transmite datele noi.
      const objectForecast = {};

      //   ForEach se foloseste mai des cand vrem doar sa iteram printrun array fara sa il modificam
      list.forEach((forecast) => {
        const { dt } = forecast;

        // modificam dt de la server (in ziua saptaminii)
        let daysKey = getDateUtc(dt);

        if (objectForecast[daysKey] !== undefined) {
          // Daca aceasta cheie exista deja in obiect, se va adauga continutul cheii
          objectForecast[daysKey].push(forecast);
        } else {
          // Daca nu exista in obiect se va adauga tot forecastul
          objectForecast[daysKey] = [forecast];
        }

        // cand vreau sa adaug o cheie unui obiect, si cheia ii o variabila, variabila se pune intre paranteze patrate []
      });

      //   Iterez prin obiect.
      // Afisez cheia , care si este ziua saptaminii
      for (const dayKey in objectForecast) {
        forecastWeather.innerHTML += `
        <h1 class="day-week mt-5 text-secondary">${dayKey}</h1>
        `;

        const list = objectForecast[dayKey];

        list.forEach((forecast) => {
          const { main, dt, weather, wind } = forecast;

          const wheatherDescription = weather[0].description;
          const temperature = Math.round(main.temp);
          const hours = getHoursUtc(dt);
          const iconUrl = getIcon(weather[0].icon);
          const windKmHour = Math.round(getMeterPerKm(wind.speed));
          const feelsLike = Math.round(main.feels_like);

          forecastWeather.innerHTML += `
        <div class="weather-forecast w-100 d-flex justify-content-between align-items-center border rounded p-4 mb-3 bg-primary">

        
        <p class="mx-5"> <strong>${hours} </strong></p>
        <p class="mx-2"> <img  src=${iconUrl} alt="icon-Weather"> <span class="description text-dark text-capitalize">${wheatherDescription} </span></p>
       
        <p> <strong class=" fs-5 mx-5" >${temperature}°C</strong> <span class="real-feel "> Real Feel: ${feelsLike}°C </span></p>
        
         
        </div>
        `;
        });
      }
    });
}
