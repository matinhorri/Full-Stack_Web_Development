
// "borrowed" from MDN's geolocation API example
function geoFindMe() {
    console.log("calling geofindme");
    const status = document.querySelector('#weatherStatus');
    
    function success(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const latitude_input = document.querySelector("#latitude-input");
        const longitude_input = document.querySelector("#longitude-input");

        longitude_input.value = longitude;
        latitude_input.value = latitude;
        console.log(`${latitude}, ${longitude}`);
        status.textContent = "";
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
}

WEATHER_CODES = {
0:  'Clear sky',
1:  'Mainly clear',
2:  'Partly cloudy',
3:  'Overcast',
45: 'Fog',
48: 'Depositing Rime fog',
51: 'Light Drizzle',
53: 'Moderate Drizzle',
55: 'Dense Drizzle',
57: 'Light Freezing Drizzle',
57: 'Dense Freezing Drizzle',
61: 'Slight Rain',
63: 'Moderate Rain',
65: 'Heavy Rain',
66: 'Light Freezing Rain',
67: 'Heavy Freezing Rain',
71: 'Slight Snow fall',
73: 'Moderate Snow fall',
75: 'Heavy Snow fall',
77: 'Snow grains',
80: 'Slight Rain showers',
81: 'Moderate Rain showers',
82: 'Violent Rain showers',
85: 'Slight Snow showers slight and heavy',
86: 'Heavy Snow showers slight and heavy',
95: 'Thunderstorm',
96: 'Thunderstorm with slight hail',
99: 'Thunderstorm with heavy hail',
}

    function getWeather() {
    let latitude = document.getElementById("latitude-input").value
    let longitude = document.getElementById("longitude-input").value
    open_meteo(latitude,longitude);
    sunset_sunrise(latitude,longitude);
    }
    document.querySelector('#find-me').addEventListener('click', geoFindMe);
    document.querySelector("#get-weather-btn").addEventListener('click', getWeather);

    async function open_meteo(latitude,longitude){
      try{
          let res = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=ms&timezone=America%2FChicago");
          // console.log("in the getWeather function latitude is: ", latitude);
          // console.log("in the getWeather function longtitude is:", longitude);
          // console.log("in the getWeather function result is:", res);
        if(res.ok){  
          let json = await res.json();
          //let data = json.data;
          //console.log("in the getWeather function json is:", json);
          let temperature = json.current_weather.temperature;
          //console.log("in the getWeather function data.temprature is:", temperature);
          document.getElementById("temp-display").innerText = "Temperature: "+temperature+" Degrees F";
          let weather_id = json.current_weather.weathercode;
          if(weather_id == 0){
            document.getElementById("cloud-cover-display").innerText = 'Clear sky';
          }
          if(weather_id == 1){
            document.getElementById("cloud-cover-display").innerText = 'Mainly clear';
          }
          if(weather_id == 2){
            document.getElementById("cloud-cover-display").innerText = 'Partly cloudy';
          }
          if(weather_id == 3){
            document.getElementById("cloud-cover-display").innerText = 'Overcast';
          }
          if(weather_id == 45){
            document.getElementById("cloud-cover-display").innerText = 'Fog';
          }
          if(weather_id == 48){
            document.getElementById("cloud-cover-display").innerText = 'Depositing Rime fog';
          }
          if(weather_id == 51){
            document.getElementById("cloud-cover-display").innerText = 'Light Drizzle';
          }
          if(weather_id == 53){
            document.getElementById("cloud-cover-display").innerText = 'Moderate Drizzle';
          }
          if(weather_id == 55){
            document.getElementById("cloud-cover-display").innerText = 'Dense Drizzle';
          }
          if(weather_id == 57){
            document.getElementById("cloud-cover-display").innerText = 'Light Freezing Drizzle';
          }
          if(weather_id == 61){
            document.getElementById("cloud-cover-display").innerText = 'Slight Rain';
          }
          if(weather_id == 63){
            document.getElementById("cloud-cover-display").innerText = 'Moderate Rain';
          }
          if(weather_id == 65){
            document.getElementById("cloud-cover-display").innerText = 'Heavy Rain';
          }
          if(weather_id == 66){
            document.getElementById("cloud-cover-display").innerText = 'Light Freezing Rain';
          }
          if(weather_id == 67){
            document.getElementById("cloud-cover-display").innerText = 'Heavy Freezing Rain';
          }
          if(weather_id == 71){
            document.getElementById("cloud-cover-display").innerText = 'Slight Snow fall';
          }
          if(weather_id == 73){
            document.getElementById("cloud-cover-display").innerText = 'Moderate Snow fall';
          }
          if(weather_id == 75){
            document.getElementById("cloud-cover-display").innerText = 'Heavy Snow fall';
          }
          if(weather_id == 77){
            document.getElementById("cloud-cover-display").innerText = 'Snow grains';
          }
          if(weather_id == 80){
            document.getElementById("cloud-cover-display").innerText = 'Slight Rain showers';
          }
          if(weather_id == 81){
            document.getElementById("cloud-cover-display").innerText = 'Moderate Rain showers';
          }
          if(weather_id == 82){
            document.getElementById("cloud-cover-display").innerText = 'Violent Rain showers';
          }
          if(weather_id == 85){
            document.getElementById("cloud-cover-display").innerText = 'Slight Snow showers slight and heavy';
          }
          if(weather_id == 86){
            document.getElementById("cloud-cover-display").innerText = 'Heavy Snow showers slight and heavy';
          }
          if(weather_id == 95){
            document.getElementById("cloud-cover-display").innerText = 'Thunderstorm';
          }
          if(weather_id == 96){
            document.getElementById("cloud-cover-display").innerText = 'Thunderstorm with slight hail';
          }
          if(weather_id == 99){
            document.getElementById("cloud-cover-display").innerText = 'Thunderstorm with heavy hail';
          }
        }else{

        }
      } catch(error){
        console.log("oops", error);
        document.getElementById("weatherStatus").innerText = "Failed to Open Meteo website, and the error is: " + error;
      }
    }


      async function sunset_sunrise(latitude,longitude){
        try{
         //document.getElementById("results").innerHTML = "";
         let result = await fetch("https://api.sunrise-sunset.org/json?lat="+latitude+"&lng="+longitude+"&formatted=0");
         if(result.ok){
        //  console.log(result);
        //  console.log("in the sunset function latitude is: ", latitude);
        //  console.log("in the sunset function longtitude is:", longitude);
        //  console.log("in the sunset function result is:", result);
         let json = await result.json();
         //let data = json.data;
         //console.log("in the getWeather function json is:", json.results.sunrise);
         let sunrise = json.results.sunrise;
         let sunrise_1 = new Date(sunrise);
         let sunrise_final = sunrise_1.toLocaleTimeString( );
        //  console.log("in the getWeather function json is:", sunrise);
        //  console.log("the value of the sunrise after the Date function is: ", sunrise_1);
        //  console.log("the fianl value of the sunrise after the Date function is: ", sunrise_final);
         document.getElementById("sunrise-display").innerText = "Sunrise: "+ sunrise_final;
         let sunset = json.results.sunset;
         let sunset_1 = new Date(sunset);
         let sunset_final = sunset_1.toLocaleTimeString( );
        // console.log("in the getWeather function json is:", json.results.sunset);
         document.getElementById("sunset-display").innerText = "Sunset: "+ sunset_final;      
      
        }else{

        }
      } catch(error){
        console.log("oops", error);
        document.getElementById("weatherStatus").innerText = "Failed to open Sunrise-Sunset website, and the error is: " + error;
      }
      
        }

