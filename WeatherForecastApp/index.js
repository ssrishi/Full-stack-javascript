const input = document.querySelector("input");
const conditionimage = document.querySelector('#conditionImage')
const degreeChange = document.querySelector('#degree') 
const conditionTextChange = document.querySelector('#conditionText') 
const locationText = document.querySelector('#location') 
const button = document.querySelector('#search')
const sunrise = document.querySelector('#sunrise')
const sunset = document.querySelector('#sunset')
const uv = document.querySelector('#uv')
const wind = document.querySelector('#wind')
const humidity = document.querySelector('#humidity')
const visibility = document.querySelector('#visibility')
const feelslike = document.querySelector('#feelslike')

fetchData('faridabad')

input.addEventListener('change', (e) => {
    e.preventDefault();
    const inputValue = e.target.value.trim();
    if (inputValue !== "") {
        fetchData(inputValue);
    }
});

button.addEventListener('click', () => {
    const inputValue = input.value.trim();
    if (inputValue !== "") {
        fetchData(inputValue);
    }
});

function fetchData(location) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=312dc43b18b74fe3ba4131335243103&q=${location}`)
        .then((res) => res.json())
        .then((data) => {
            const forecastDay = data.forecast.forecastday[0]
            let imageUrl = data["current"]["condition"]["icon"];
            conditionimage.innerHTML = `<img src="${imageUrl}">`;
            degreeChange.innerHTML = `${data["current"]["temp_c"]}<sup>o</sup>C `;
            conditionTextChange.innerHTML = ` ${data["current"]["condition"]["text"]} `
            locationText.innerHTML = ` ${data["location"]["name"]}, ${data["location"]["country"]} `
            uv.innerHTML = `${data.current.uv}`
            wind.innerHTML = `${data.current.wind_kph} Km/h`
            sunrise.innerHTML = `<img src="./assets/sunrise.png" alt="sunrise"> ${forecastDay.astro.sunrise}`
            sunset.innerHTML = `<img src="./assets/sunset.png" alt="sunrise"> ${forecastDay.astro.sunset}`
            humidity.innerHTML = `${data.current.humidity}%` 
            visibility.innerHTML = `${data.current.vis_km} km`
            feelslike.innerHTML = `${data.current.feelslike_c} <sup>o</sup> C`
        })
        .catch(() => {
            alert(`Oops Sorry we don't have that data`)
        });
}
