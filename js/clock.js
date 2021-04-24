function updateClock() {
    const clock = document.querySelector(".clock"); 
    clock.innerText = new Date().toLocaleTimeString();
    clock.style.color = "#ffc962";
}
setInterval(updateClock, 1000);