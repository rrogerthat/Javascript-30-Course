let time = window.setInterval(getTime, 1000); /* check every second so every hand is updated timely */

function getTime() {
    let date = new Date();
    let seconds = date.getSeconds();
    let seconds_degree = seconds * (360 / 60) + 90; /* convert seconds to equivalent degree in a circle */
    console.log(seconds);  /* add 90 since 0 degrees started 90 degrees to left (div is flat line)- so we can match seconds to hand */
    document.querySelector(".second-hand").style.transform = `rotate(${seconds_degree}deg)`;

    let minutes = date.getMinutes();
    let minutes_degree = (minutes * (360 / 60)) + 90;
    document.querySelector(".min-hand").style.transform = `rotate(${minutes_degree}deg)`;

    let hour = date.getHours();
    let hour_degree = (hour * (360 / 12)) + 90;
    document.querySelector(".hour-hand").style.transform = `rotate(${hour_degree}deg)`;
}


