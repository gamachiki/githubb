
var search1 = document.getElementById("search1"),
    search2 = document.getElementById("search2"),
    cityName = document.getElementById("city-name"),
    icon = document.getElementById("icon"),
    temperature = document.getElementById("temp"),
    feels = document.getElementById("feel"),
    tmin = document.getElementById("min"),
    humidity = document.getElementById("humidity-div"),
    tmax = document.getElementById("max"),
    clouds = document.getElementById("cloud"),
    windy = document.getElementById("wind");
search1.addEventListener("click", search);
search2.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
        search();
    }
}
function search() {
        let link = "https://api.openweathermap.org/data/2.5/weather?q=" + search2.value + "&appid=ff532977349290d86ac2bc3243a8ca5a";
        httpRequest(link, theResponse);
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = "temp:" + parseInt(jsonObject.main.temp - 273) + "°";
    feels.innerHTML = "feel:" + parseInt(jsonObject.main.feels_like - 273) + "°";
    tmin.innerHTML= "tmin:"+ parseInt(jsonObject.main.temp_min - 273) + "°";
    humidity.innerHTML ="humidity:" + jsonObject.main.humidity + "%";
     clouds.innerHTML= "cloud:" + jsonObject.clouds.all + "%";
     tmax.innerHTML = "tmax:" + parseInt(jsonObject.main.temp_max - 273 ) + "°";

     windy.innerHTML = "wind:" + jsonObject.wind.speed +"m/s";
}

function httpRequest(url, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    }
    xhr.open("GET", url, true);
    xhr.send();
}