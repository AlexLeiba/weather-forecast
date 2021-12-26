function displayCurrentWeather(city) {
  const currentWeatherSection = document.querySelector(".current-weather");

  // fetch-ul se adauga numai in interiorul unei functii
  const endpointUrlWeather = getCurrentWeatherCity(city);
  fetch(endpointUrlWeather)
    .then((response) => response.json())
    .then((json) => {
      //  Extragem cheile dorite din obiectul Json, prin Object destructuring din Api.
      const { weather, main, wind, dt, name } = json;
      console.log(json);

      //Filtram valorile primite de la server si le salvam intro variabila
      const wheatherDescription = weather[0].description;
      const temperature = Math.round(main.temp);
      const hours = getHoursUtc(dt);
      const day = getDateUtc(dt);
      const iconUrl = getIcon(weather[0].icon);
      const windKmHour = Math.round(getMeterPerKm(wind.speed));
      const feelsLike = Math.round(main.feels_like);

      // Afisam valorile
      currentWeatherSection.innerHTML = `

      <div class="d-flex justify-content-evenly">

        <div class="mt-2 ">  
              <h3 class="mb-5 mz-5 fs-1 text-primary">${name}</h3>
              <p class="mb-5"><strong class="fs-3 text-primary"> ${day}</strong> 
              , <span class="text-primary">${hours} </span> </p>
              <p class="text-primary"> <strong>Wind Speed:</strong>  ${windKmHour} Km/h </p>
        </div>
        
        <div class="">
              <p class="mt-3 text-primary text-capitalize">${wheatherDescription}</p>
              <p><img src=${iconUrl} alt="icon"> <strong class="fs-5 text-primary">${temperature}°C</strong></p> 
                <p class=" text-primary">Feels Like: <strong>${feelsLike}°C</strong> </p>
               
        </div>

      </div>
        
         `;
    });
}
