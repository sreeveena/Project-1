//weather
const loc = document.getElementById("location");
const temNum = document.getElementById("temperature-num");
const temScale = document.getElementById("temperature-scale");
const weatherCon = document.getElementById("weather-condition");
const weatherIcon = document.getElementById("weather-icon");
// get location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude);
    });
  } else {
    loc.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// get weather data according to the location
function getWeather(lat, long) {
  const root = "https://fcc-weather-api.glitch.me/api/current?";
  fetch(`${root}lat=${lat}&lon=${long}`, { method: "get" })
    .then(resp => resp.json())
    .then(data => {
      updateDataToUI(data.name, data.weather, data.main.temp);
    })
    .catch(function(err) {
      console.error(err);
    });
}
// update the data from API to DOM
function updateDataToUI(location, weather, temp) {

  weatherImage=$('<div class="weather"><img src="'+ weather[0].icon +'" /></div><br>');
  weatherTemp= $('<div class="weather">'+ temp + ' &#8451</div>');
  weatherLocation= $('<div class="weather">'+ location + '</div>');
  $('#weather').append(weatherLocation);
  $('#weather').append(weatherImage);
  $('#weather').append(weatherTemp);
  
}
window.onload = function() {
  getLocation();
};
