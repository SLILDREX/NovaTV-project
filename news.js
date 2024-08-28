const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector('.overlay');
const disableScroll = document.querySelector('body');
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.getElementById("weather");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.style.display = offScreenMenu.classList.contains('active') ? 'block' : 'none';
  disableScroll.style.overflow = offScreenMenu.classList.contains('active') ? 'hidden' : 'auto';
});

fetchWeather();

function fetchWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Kazanlak&appid=777db65da0f07785b5ac8be5c653eee8&units=metric")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const humidityValue = data.main.humidity;
      const iconId = data.weather[0].icon;

      temp.textContent = "Температура: " + Math.round(temperature) + "°C";
      humidity.textContent = "Влажност: " + humidityValue + "%"; //Не бъди глупак и си проверявай дали humidityValue не се пренаписва от humidity 💀

      getIcon(iconId);
      getTempGradient(temperature);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function getIcon(iconId) {
  switch (iconId) {
    case "01d":
      weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
      break;
    case "01n":
      weatherIcon.src = "https://openweathermap.org/img/wn/01n@2x.png";
      break;
    case "02d":
      weatherIcon.src = "https://openweathermap.org/img/wn/02d@2x.png";
      break;
    case "02n":
      weatherIcon.src = "https://openweathermap.org/img/wn/02n@2x.png";
      break;
    case "03d":
      weatherIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";
      break;
    case "03n":
      weatherIcon.src = "https://openweathermap.org/img/wn/03n@2x.png";
      break;
    case "04d":
      weatherIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
      break;
    case "04n":
      weatherIcon.src = "https://openweathermap.org/img/wn/04n@2x.png";
      break;
    case "09d":
      weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
      break;
    case "09n":
      weatherIcon.src = "https://openweathermap.org/img/wn/09n@2x.png";
      break;
    case "10d":
      weatherIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
      break;
    case "10n":
      weatherIcon.src = "https://openweathermap.org/img/wn/10n@2x.png";
      break;
    case "11d":
      weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
      break;
    case "11n":
      weatherIcon.src = "https://openweathermap.org/img/wn/11n@2x.png";
      break;
    case "13d":
      weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
      break;
    case "13n":
      weatherIcon.src = "https://openweathermap.org/img/wn/13n@2x.png";
      break;
    case "50d":
      weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
      break;
    case "50n":
      weatherIcon.src = "https://openweathermap.org/img/wn/50n@2x.png";
      break;
  }
}

function getTempGradient(temp) {
  if (temp >= -5 && temp <= 0) {
    weather.classList.toggle("quitecold-freezing");
  } else if (temp > 0 && temp <= 5) {
    weather.classList.toggle("freezing-cold");
  } else if (temp > 5 && temp <= 10) {
    weather.classList.toggle("cold-chilly");
  } else if (temp > 10 && temp <= 15) {
    weather.classList.toggle("chilly-cool");
  } else if (temp > 15 && temp <= 20) {
    weather.classList.toggle("cool-nice");
  } else if (temp > 20 && temp <= 25) {
    weather.classList.toggle("nice-warm");
  } else if (temp > 25 && temp <= 30) {
    weather.classList.toggle("warm-quitehot");
  } else if (temp > 30) {
    weather.classList.toggle("quitehot-damnhot");
  }
}