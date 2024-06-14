const API = '3704450acb49417cb5762c4dd875cf4c'

const URL1 = 'https://api.openweathermap.org/data/2.5/weather?q='
const URL2 = '&APPID=3704450acb49417cb5762c4dd875cf4c'

const btnAdd = document.querySelector('#btnAdd')
const cityAdd = document.querySelector('#cityAdd')

btnAdd.addEventListener('click', dodaj_miasto)

document.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index <= 10; index++) {
        if (localStorage.getItem(index) != null) {
            pobierz_miasto(localStorage.getItem(index))
        }

    }
});


function pobierz_miasto(miasto) {
    const URL = URL1 + miasto + URL2

    fetch(URL)
        .then(obietnica => {
            return obietnica.json()
        })
        .then(pogoda => wyswietl_pogode(pogoda))
}

function wyswietl_pogode(pogoda_miasta) {
    const { name, weather, main: { temp, humidity, pressure }, wind: { speed } } = pogoda_miasta

    const blok_pogody = document.createElement('div');
    blok_pogody.innerHTML = `
        <h2>${name}</h2>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="weather-icon" alt="${weather[0].description}">
        <p>${weather[0].main}</p>
        <p>Temperatura: ${temp}°K</p>
        <p>Wilgotność: ${humidity}%</p>
        <p>Ciśnienie: ${pressure} hPa</p>
        <p>Prędkość wiatru: ${speed} m/s</p>
        <button onclick="usun_miasto('${name}')">Usuń</button>`


    document.querySelector('body').appendChild(blok_pogody);
}


function dodaj_miasto() {
    console.log('test')
    const cityAdd = document.querySelector('#cityAdd')

    let czy_istnieje = 0
    for (let index = 1; index <= 10; index++) {
        if (localStorage.getItem(index) == cityAdd.value) {
            czy_istnieje++
            console.log(czy_istnieje)
        }
        
    }

    if (czy_istnieje == 0 ) {
        for (let index = 1; index <= 10; index++) {
            if (localStorage.getItem(index) == null) {
                localStorage.setItem(index.toString(), cityAdd.value)
    
                break
            }
        }
    }
    
    location.reload()////
}

function usun_miasto(miasto) {
    for (let index = 1; index <= 10; index++) {
        if (localStorage.getItem(index) == miasto) {
            localStorage.removeItem(index)
        }
    }
    location.reload()////
}