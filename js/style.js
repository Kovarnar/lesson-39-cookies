"use strict"
document.addEventListener('DOMContentLoaded', () => {
    
    const WEATHER_BLOCK = document.querySelector('.weather');

    let currentDate = getDate(new Date());
    function getDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = date.getMonth();
        switch(mm) {
            case 0: mm = 'Jan';
            break;
            case 1: mm = 'Feb';
            break;
            case 2: mm = 'Mar';
            break;
            case 3: mm = 'Apr';
            break;
            case 4: mm = 'May';
            break;
            case 5: mm = 'Jun';
            break;
            case 6: mm = 'Jul';
            break;
            case 7: mm = 'Aug';
            break;
            case 8: mm = 'Sept';
            break;
            case 9: mm = 'Oct';
            break;
            case 10: mm = 'Nov';
            break;
            case 11: mm = 'Dec';
            break;
        }
        let yyyy = date.getFullYear();
        return (dd + ' ' + mm + ' ' + yyyy);
    }

    async function loadWeather(e) {

        const SERVER = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=0a738301d7640d6dd8b99ec5dbe29fab';
        const RESPONSE = await fetch(SERVER, {
            method: 'GET',
        });
        const RESPONSE_RESULT = await RESPONSE.json();

        if (RESPONSE.ok){
            getWeather(RESPONSE_RESULT)
        } else {
            WEATHER_BLOCK.innerHTML = RESPONSE_RESULT.message;
        }
    }

    function getWeather(data){

        const LOCATION = data.name,
            TEMPERATURE = Math.round((data.main.temp) - 273.15),
            STATUS = data.weather[0].main,
            ICON_WEATHER = data.weather[0].icon;

            const TEMPLATE = `
            <div class="weather__header">
                <div class="weather__city">${LOCATION}</div>
                <div class="weather__date">${currentDate}</div>
            </div>
            <div class="weather__center">
                <div class="weather__temp">${TEMPERATURE} &deg;C</div>
                <div class="weather__icon">
                <img src="http://openweathermap.org/img/w/${ICON_WEATHER}.png" alt="${STATUS}">
                </div>
            </div>
            `;

            WEATHER_BLOCK.innerHTML = TEMPLATE;
    }

    loadWeather();

    setInterval(loadWeather(), 7200000);
})