//WindChill
// let t = document.querySelector("#temp").innerHTML;
// let s = document.querySelector("#wind-speed").innerHTML;
// let wc = 35.74 + (0.6215*t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
// wc = Math.round(wc);

// if (t <= 50 && s >= 3){
//     document.querySelector("#wind-chill").innerHTML = wc + " °F";
// }
// else{
//     document.querySelector("#wind-chill").innerHTML = "N/A";
// }

//ADD the key and change units to metric
const apiURL = 'https://github.com/j-ke614/wdd230/blob/main/chamber/data/city.list.json'

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    let temperature=weatherInfo.main.temp;
    temperature=temperature.toFixed(1)
    let windSpeed=weatherInfo.wind.speed;
    windSpeed=windSpeed.toFixed(1)
    
    document.getElementById('name').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=temperature-(210.30000000000001)+'° F';
    document.getElementById('windSpeed').innerHTML='Wind Speed: '+windSpeed;

    const iconsrc= `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
    const desc = weatherInfo.weather[0].description;
    
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weather-desc').textContent = desc+'.';
    
    const temp=weatherInfo.main.temp;
    const wind=weatherInfo.wind.speed;

  let wc=35.74+(0.6215*temp)-(35.75*Math.pow(wind, 0.16))+(0.4275*temp*Math.pow(wind, 0.16))
  wc=wc.toFixed(1)
  if (temp <=50 && wind >= 3) {
    document.getElementById('wind-chill').textContent='Wind Chill: '+wc+'° C';
  } else {
    document.getElementById('wind-chill').textContent='Not available'
  }



 }); 