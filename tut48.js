console.log('Exercise 6: Creating a Clock using JavaScript');

function updateClock() {
    //Get the currrent date:
    let currentTime = new Date();

    //Extracting Hour, Minutes and Seconds from the Date:
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minute or second is less than 10(single digit):
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;

    // Choose AM/PM as per the time of the day:
    const timeOfDay = (currentHour < 12) ? "AM" : "PM";

    //Convert railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    // prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + "  " + timeOfDay;

    //Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;
}