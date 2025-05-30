let seconds = parseInt(prompt("Enter countdown time in seconds:"), 10);

if (isNaN(seconds) || seconds <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  console.log(`Starting countdown from ${seconds} seconds...`);

  let countdownInterval = setInterval(() => {
    console.log(`Time left: ${seconds} seconds`);
    seconds--;

    if (seconds < 0) {
      clearInterval(countdownInterval);
      console.log("Countdown Complete!");
      window.removeEventListener("keydown", keyHandler);
    }
  }, 1000);

  let allowStop = false;

  setTimeout(() => {
    allowStop = true;
    console.log("Press 's' to stop the countdown early.");
  }, 3000);

  function keyHandler(event) {
    if (allowStop && event.key.toLowerCase() === 's') {
      clearInterval(countdownInterval);
      console.log("Countdown stopped by user!");
      window.removeEventListener("keydown", keyHandler);
    }
  }

  window.addEventListener("keydown", keyHandler);
}
