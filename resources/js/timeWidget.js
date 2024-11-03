var endOfSem = new Date("Dec 22, 2022 00:00:00").getTime();
 function timeUntil(now){
       var timer = endOfSem - now;
       var days = Math.floor(timer / (1000 * 60 * 60 * 24));
       var hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((timer % (1000 * 60)) / 1000);
          return {
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds
      };
     };
function result( ) {
 var now =new Date().getTime();
 const {day, hour, minute, second} = timeUntil(now);
  const resultElement = document.getElementById("demo");
    document.getElementById("demo").innerHTML = day + "d " + hour + "h "+ minute + "m " + second + "s ";
 }
setInterval(result, 1000);