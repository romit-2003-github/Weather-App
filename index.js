alert("please enter city in the Search box !");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd2f25bced5mshc20a5c9ad38f1c6p15ca67jsn582aa8f5d15b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));

}

let search = document.getElementById('searchTxt');
function searchCity() {
    let val = search.value;
    const finalVal = val.charAt(0).toUpperCase() + val.slice(1);
    document.getElementById('cityName').innerHTML = finalVal;
    getWeather(val);
}

const weatherBng = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pctbng.innerHTML = response.cloud_pct;
            feels_likebng.innerHTML = response.feels_like;
            humiditybng.innerHTML = response.humidity;
            max_tempbng.innerHTML = response.max_temp;
            min_tempbng.innerHTML = response.min_temp;
            sunrisebng.innerHTML = response.sunrise;
            sunsetbng.innerHTML = response.sunset;
            tempbng.innerHTML = response.temp;
            wind_degreesbng.innerHTML = response.wind_degrees;
            wind_speedbng.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
}

const weatherChe = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pctche.innerHTML = response.cloud_pct;
            feels_likeche.innerHTML = response.feels_like;
            humidityche.innerHTML = response.humidity;
            max_tempche.innerHTML = response.max_temp;
            min_tempche.innerHTML = response.min_temp;
            sunriseche.innerHTML = response.sunrise;
            sunsetche.innerHTML = response.sunset;
            tempche.innerHTML = response.temp;
            wind_degreesche.innerHTML = response.wind_degrees;
            wind_speedche.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
}

const weatherMum = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pctmum.innerHTML = response.cloud_pct;
            feels_likemum.innerHTML = response.feels_like;
            humiditymum.innerHTML = response.humidity;
            max_tempmum.innerHTML = response.max_temp;
            min_tempmum.innerHTML = response.min_temp;
            sunrisemum.innerHTML = response.sunrise;
            sunsetmum.innerHTML = response.sunset;
            tempmum.innerHTML = response.temp;
            wind_degreesmum.innerHTML = response.wind_degrees;
            wind_speedmum.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
}

const weatherKol = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pctkol.innerHTML = response.cloud_pct;
            feels_likekol.innerHTML = response.feels_like;
            humiditykol.innerHTML = response.humidity;
            max_tempkol.innerHTML = response.max_temp;
            min_tempkol.innerHTML = response.min_temp;
            sunrisekol.innerHTML = response.sunrise;
            sunsetkol.innerHTML = response.sunset;
            tempkol.innerHTML = response.temp;
            wind_degreeskol.innerHTML = response.wind_degrees;
            wind_speedkol.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
}

weatherBng();
weatherChe();
weatherMum();
weatherKol();