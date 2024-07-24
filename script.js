let apiKey = "dc723b4800154385858143143242207";
//let url=`https://api.weatherapi.com/v1/current.json?key=dc723b4800154385858143143242207&q=$Kolkata&aqi=no`;
let alert1 = document.querySelector('.alert');
async function fetchNews(query) {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=dc723b4800154385858143143242207&q=${query}&aqi=no`);
    if (!res) {
        alert1.innerText = `Please enter a valid place`;
        return;
    }
    else {
        const data = await res.json();
        if (!data.current) {
            alert1.innerText = `Please enter a valid place`;
            return;
        }
        else {
            alert1.style.display = "none";
            let whole = document.querySelector('.weather');
            whole.setAttribute('id', 'myClass');
            let put = document.querySelector('#myClass');
            put.innerHTML =
             `<div class="weather">
        <img src="rainy-day.png" class="weather-icon">
        <h1 class="temp"></h1>
        <h2 class="city"></h2>
        <h4 class="text"></h4>
        <p id="time">Last Update: ${data.current.last_updated}</p>
        <div class="details">
            <div class="col" id="col1">
                <img src="drop.png">
                <div>
                    <p class="humidity data-col"></p>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="col" id="col2">
                <img src="wind.png">
                <div>
                    <p class="wind data-col"></p>
                    <p>Wind speed</p>
                </div>
            </div>
        </div>
        <div class="details">
            <div class="col" id="col3">
                <img src="eye.png">
                <div>
                    <p class="Visibility data-col"></p>
                    <p>Visibility</p>
                </div>
            </div>
            <div class="col" id="col4">
                <img src="cloud-computing.png">
                <div>
                    <p class="cloud data-col"></p>
                    <p>Cloud</p>
                </div>
            </div>
        </div>
        <div class="details">
            <div class="col" id="col5">
                <img src="uv.png">
                <div>
                    <p class="uv data-col"></p>
                    <p>uv</p>
                </div>
            </div>
            <div class="col" id="col6">
                <img src="barometer.png">
                <div>
                    <p class="presure data-col"></p>
                    <p>presure</p>
                </div>
            </div>
        </div>
         <div class="details">
            <div class="col" id="col7">
                <img src="dew.png">
                <div>
                    <p class="dewpoint data-col"></p>
                    <p>dewpoint</p>
                </div>
            </div>
            <div class="col" id="col8">
                <img src="weather-vane.png">
                <div>
                    <p class="wind-direction data-col"></p>
                    <p>Wind</p>
                    <p>Direction</p>
                </div>
            </div>
        </div>`
            let png = document.querySelector('.weather-icon');
            let temp = document.querySelector('.temp');
            let place = document.querySelector('.city');
            let wind = document.querySelector('.wind');
            let humidity = document.querySelector('.humidity');
            let visibility = document.querySelector('.Visibility');
            let cloud = document.querySelector('.cloud');
            let uv = document.querySelector('.uv');
            let presure = document.querySelector('.presure');
            let dewpoint = document.querySelector('.dewpoint');
            let windDir = document.querySelector('.wind-direction');
            let text = document.querySelector('.text');
            let weather = document.querySelector('.weather');
            console.log(whole);
            console.log(data.current);
            png.src = data.current.condition.icon;
            temp.innerText = data.current.temp_c + '°C';
            place.innerText = query;
            wind.innerText = data.current.wind_kph + ' km/h';
            humidity.innerText = data.current.humidity + '%';
            visibility.innerText = data.current.vis_km + 'km';
            cloud.innerText = data.current.cloud;
            uv.innerText = data.current.uv;
            presure.innerText = data.current.pressure_mb + 'mb';
            dewpoint.innerText = data.current.dewpoint_c + 'c';
            windDir.innerText = data.current.wind_dir;
            text.innerText = data.current.condition.text;
        }
    }
}

let button = document.querySelector('#btn');
button.addEventListener('click', () => {
    let cityName = document.querySelector('#cityName');
    let cityValue = cityName.value;
    if(cityValue==''){
        alert1.innerText = `Please enter a valid place`;
    }
    else{
    console.log(cityValue);
    fetchNews(cityValue);
    }
});