//WindChill
let t = document.querySelector("#temp").innerHTML;
let s = document.querySelector("#wind-speed").innerHTML;
let wc = 35.74 + (0.6215*t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
wc = Math.round(wc);

if (t <= 50 && s >= 3){
    document.querySelector("#wind-chill").innerHTML = wc + " °F";
}
else{
    document.querySelector("#wind-chill").innerHTML = "N/A";
}