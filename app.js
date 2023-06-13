var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("se");
var timePeroid = document.getElementById("period");

function Clock(){
    var date = new Date();
    var hour  = date.getHours();
    var minute  = date.getMinutes();
    var second  = date.getSeconds();
    var timePeroid = "AM";

    if(hour > 12){
        hour = hour-12;
        timePeroid = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    document.getElementById('min').innerHTML = hour;
    document.getElementById('hr').innerHTML = minute;
    document.getElementById('sec').innerHTML = second;
    document.getElementById('period').innerHTML = timePeroid;


    setTimeout(function(){
        Clock();
    } ,1000);
}
Clock();