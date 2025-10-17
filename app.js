// Update time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial update
updateTime();

// Update every second to keep it current
setInterval(updateTime, 1000);
