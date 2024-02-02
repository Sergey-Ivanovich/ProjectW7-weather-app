function cityHandle(event) {
  event.preventDefault();

  let apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityHandle);
