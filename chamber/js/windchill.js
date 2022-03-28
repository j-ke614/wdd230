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

 window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 22,cityid: '5605242',appid: 'a69eb90c84107306095213e00d60dbba',units: 'imperial',containerid: 'openweathermap-widget-22',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();