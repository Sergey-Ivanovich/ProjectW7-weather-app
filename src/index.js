function cityHandle(event) {
  event.preventDefault();
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityHandle);
