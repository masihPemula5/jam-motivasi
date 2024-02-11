function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
  
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
  
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${date}/${month}/${year}`;
  }
  
  setInterval(updateTime, 1000);
  updateTime(); // Run immediately to prevent delay on page load
  