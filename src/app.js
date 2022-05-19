function displayTemperature(response) {
  console.log(response.data.main.temp);
  let cityELement = document.querySelector("#temperature");
  let temperatureELement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureELement.innerHTML = Math.round(response.data.main.temp);
  cityELement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHtml = Math.round(response.data.main.wind.speed);
}
let apiKey = "66e6430c68b170d229d336c712c23f43";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
