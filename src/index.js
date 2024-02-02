function weatherRefresh(response) {
  let tempElement = document.querySelector("#shownTemp");
  let cityNameElement = document.querySelector("h1");
  let currentTemp = Math.round(response.data.temperature.current);
  let conditionElement = document.querySelector("#shown-condition	");

  conditionElement.innerHTML = response.data.condition.description;
  cityNameElement.innerHTML = response.data.city;
  tempElement.innerHTML = `${currentTemp} `;
}

function apiSearch(city) {
  let apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(weatherRefresh);
}

function cityHandle(event) {
  event.preventDefault();

  let city = document.querySelector(`#city-box`);
  apiSearch(city.value);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityHandle);

apiSearch(`Moscow`);
