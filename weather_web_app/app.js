class WeatherApp {
    constructor() {
        this.locationAddress = "";
        this.apiKey = "T5JGY8HR7LG7BY723DV9TYJXD";
        this.apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
        this.weatherFilteredData = {};
    }

    init() {
       const locationInput =  document.getElementById("location");
       locationInput.addEventListener("keyup", this.handleLocationSearch.bind(this)); 
    }

    handleLocationSearch(event){
        const locationInput =  document.getElementById("location");
        const locationValue = locationInput.value.trim();
        this.locationAddress = locationValue;
        if(event.key === "Enter") {
            this.fetchWeatherData();
        }
    }

    async fetchWeatherData() {
        const location = this.locationAddress;
        if(location === "") {
            alert("Please enter a location.");
            return;
        }

        if(location.length < 3) {
            alert("Location must be at least 3 characters long.");
            return;
        }

        const url = `${this.apiUrl}${location}?key=${this.apiKey}`;
        const weatherContainer = document.getElementById("weather-data");
        weatherContainer.innerHTML = `<p class="text-2xl font-bold">Loading...</p>`;
        const response = await fetch(url);
        const data =  await response.json();
        this.filterWeatherData(data);
        this.displayWeatherData();
    }

    filterWeatherData(data) {
        const temperature = data.currentConditions.temp;
        const windSpeed = data.currentConditions.windspeed;
        const likelyhoodOfRain = data.currentConditions.preciptype || "None";
        const generalWealther = data.currentConditions.conditions;
        this.weatherFilteredData = {
            temperature,
            windSpeed,
            likelyhoodOfRain,
            generalWealther
        };
    }

    displayWeatherData() {
        const weatherData= this.weatherFilteredData;
        const weatherContainer = document.getElementById("weather-data");
        const weatherHtml = `
            <h2 class="text-3xl font-bold">Weather Data for <span class="capitalize">${this.locationAddress}</span></h2>
            <p class="text-7xl font-bold">${weatherData.temperature}°F</p>
            <p><strong>Wind Speed</strong>: ${weatherData.windSpeed || 0} km/h</p>
            <p><strong>Likelyhood of Rain</strong>: ${weatherData.likelyhoodOfRain}</p>
            <p><strong>General Weather</strong>: ${weatherData.generalWealther}</p> 
        `;
        weatherContainer.innerHTML = weatherHtml;
    }
}

const app = new WeatherApp();
app.init();