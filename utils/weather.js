function getIcon(icon) {
  const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return urlIcon;
}

function getMeterPerKm(meters) {
  const kmHour = (meters * 18) / 5;

  return kmHour;
}
