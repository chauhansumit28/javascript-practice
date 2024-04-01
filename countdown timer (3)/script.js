   // Getting formated date from date string
   let deadline = new Date(
    "29 March, 2024 15:37:25"
).getTime();

// Calling defined function at certain interval
let x = setInterval(function () {

    // Getting current date and time in required format
    let now = new Date().getTime();

    // Calculating difference
    let t = deadline - now;

    // Getting values of days,hours,minutes, seconds
    let days = Math.floor(
        t / (1000 * 60 * 60 * 24)
    );
    let hours = Math.floor(
        (t % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
    );
    let minutes = Math.floor(
        (t % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor(
        (t % (1000 * 60)) / 1000
    );

// Show the output time
document.getElementById("days")
.innerHTML = days;
document.getElementById("hours")
.innerHTML = hours;
document.getElementById("min")
.innerHTML = minutes;
document.getElementById("sec")
.innerHTML = seconds;


}, 1000);