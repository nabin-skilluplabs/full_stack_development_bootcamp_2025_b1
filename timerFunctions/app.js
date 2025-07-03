document.querySelectorAll(".drum").forEach((drum) => {
    drum.addEventListener("click", printLabel);
});

function printLabel(item) {
    console.log( item.target.textContent);
}

// Timer functions
// setTimeout
console.log('A');
setTimeout(function() {
    console.log('This is setTimeout function');
    document.querySelector("h1").textContent = "Welcome to Skillup Labs";
},1000 * 10);
console.log('B');
// setInterval

setInterval(printSomething, 1000);

function printSomething() {
    console.log('This is something!');
}

setInterval(function() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const milli = currentTime.getMilliseconds();
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("mins");
    const secondElement = document.getElementById("sec");
    const milliElement = document.getElementById("milli");
    hourElement.textContent = hours;
    minuteElement.textContent = (minutes < 10) ? `0${minutes}` : minutes;
    secondElement.textContent = (seconds < 10) ? `0${seconds}` : seconds;
    milliElement.textContent = milli;
}, 100);

let intervalPointer;
document.querySelector("#start").addEventListener("click", function() {
    console.log("Start");
    let count = 0;
    intervalPointer = setInterval(function() {
        const seconds = count % 60;
        const mins = Math.floor(count / 60) % 60;
        const hour = Math.floor(count / 3600);
        document.getElementById("timerValue").textContent = `${hour} : ${mins} : ${seconds}`
        count++;
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", function() {
    console.log("Stop");
    clearInterval(intervalPointer);
});