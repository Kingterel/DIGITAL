const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();

    // Get the current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate degrees for each hand
    const secondDeg = (seconds / 60) * 360; // Add 90 to align with CSS starting position
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    // Apply transformations to rotate the hands
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// Function to continuously animate the clock
function startClock() {
    updateClock();
    requestAnimationFrame(startClock); // Use requestAnimationFrame for smoother updates
}

// Start the clock
startClock();
