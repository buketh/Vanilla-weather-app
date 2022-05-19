function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data.main.temp);
  let cityELement = document.querySelector("#temperature");
  let temperatureELement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureELement.innerHTML = Math.round(response.data.main.temp);
  cityELement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
let apiKey = "a6dd9caacfc4a8d8972e0f359cde221a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=a6dd9caacfc4a8d8972e0f359cde221a&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
