// Hours
function getHoursUtc(utc) {
  let dateHours = new Date(utc * 1000);

  let hours = dateHours.getHours();
  let minutes = dateHours.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
}

// Date
function getDateUtc(utc) {
  let date = new Date(utc * 1000);
  let currentDate = date.getDate();
  let currentDay = date.getDay();
  let day;

  switch (currentDay) {
    case 0:
      day = "Duminică";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
  }
  return day;
}

// Theme Black/Gray

const themeButton = document.querySelector(".button-theme");
const body = document.querySelector(".body");
const title = document.querySelector(".title");
const paragraf = document.querySelector(".paragraf");
const paragraf2 = document.querySelector(".paragraf2");
const titleForecast = document.querySelector(".titleh2");
const dayWeek = document.querySelector(".day-week");

themeButton.addEventListener("click", function () {
  body.classList.toggle("body2");
  if (themeButton.style.backgroundColor === "rgb(176, 176, 179)") {
    themeButton.style.backgroundColor = "black";
    title.style.color = "Black";
    paragraf.style.color = "Black";
    paragraf2.style.color = "Black";
    currentCity.style.color = "Black";
    titleForecast.style.color = "Black";
    dayWeek.style.color = "Black";
  } else {
    themeButton.style.backgroundColor = "rgb(176, 176, 179)";

    title.style.color = "white";
    paragraf.style.color = "white";
    paragraf2.style.color = "white";
    currentCity.style.color = "white";
    titleForecast.style.color = "white";
    dayWeek.style.color = "white";
  }
});

// Scroll Button

const buttonScroll = document.querySelector(".buttonScroll")

buttonScroll.addEventListener("click", function(){

  window.scrollTo({
    behavior: "smooth",
    top: 0,
  })
})

document.addEventListener("scroll", function(event){

  if(window.scrollY > 700){
    buttonScroll.style.visibility="visible"
  } else {
    buttonScroll.style.visibility="hidden"
  }
})