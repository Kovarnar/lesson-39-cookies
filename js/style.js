"use strict"

const WEATHER_BLOCK = document.querySelector('.weather');

let currentDate = getDate(new Date());
console.log(currentDate);

async function loadWeather(e) {

    const SERVER = 'https://api.openweathermap.org/data/3.0/onecall?lat=50.4500336&lon=30.5241361&exclude=hourly&appid=0a738301d7640d6dd8b99ec5dbe29fab';

    // const SERVER_2 = 'http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=0a738301d7640d6dd8b99ec5dbe29fab'
    
    console.log(SERVER);
    console.log(SERVER_2);

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
    console.log(data);


    // const template = `
    //     <div class="weather__header">
    //         <div class="weather__city">${місто}</div>
    //         <div class="weather__date">${currentDate}</div>
    //     </div>
    //     <div class="weather__center">
    //         <span class="weather__temp">${температура}</span>
    //         <span class="weather__icon">${іконка}</span>
    //     </div>
    // `
}

if (WEATHER_BLOCK){
    loadWeather();
}

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