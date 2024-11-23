const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds / 10;
    const hourDeg = hours * 30 + minutes / 2;

    secondHand.style.transform = `rotate(${90 + secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${90 + minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${90 + hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
