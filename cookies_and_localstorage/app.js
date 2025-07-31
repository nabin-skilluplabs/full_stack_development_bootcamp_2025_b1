document.querySelector("#fullName").addEventListener('keyup', function(event) {
    const value = event.target.value;
    document.cookie = "fullName=" + value;
    document.querySelector("h1").innerHTML = "Hello " + value;
    window.cookie = 'fullName='; 
});

// cookies
function getFullNameFromCookie() {
    const cookie = document.cookie;
    let fullName  = "John";
    const cookieItems = cookie.split("; ");
    cookieItems.forEach(item => {
        if(item.startsWith("fullName")) {
            fullName = item.split("=")[1];
        }
    })
    if(fullName) {
        document.querySelector("h1").innerHTML = "Hello " + fullName;
    }
}
getFullNameFromCookie();


function showPrice() {
    const cookie = document.cookie;
    console.log(cookie)
    const cookieItems = cookie.split("; ");
    console.log(cookieItems)
    let price = 200;
    cookieItems.forEach(item => {
        if(item.startsWith("price")) {
            price = item.split("=")[1];
            price = parseInt(price) + price * 10/100;
        }
    })
    document.cookie = "price=" + parseInt(price) + ";path=/";
    document.querySelector(".price").innerHTML = price;
    
}
showPrice();
// localstorage

localStorage.setItem("email", "info@skilluplabs.com.au");
const email = localStorage.getItem("email");
console.log(email);
localStorage.setItem("currentUser", JSON.stringify({
    firstName: "Alex",
    lastName: "lee",
    email: "alex.lee@gmail.com",
    mobile: '0420400125'
}));

const curretUser = localStorage.getItem("currentUser");
const curretUserObject = JSON.parse(curretUser);
console.log(curretUserObject.firstName);
console.log(curretUserObject.lastName);
console.log(curretUserObject.email);

window.cookie = "price=" + ";path=/";

const progressbar = document.querySelector("#progressbar");
let start = 0;
const resource =   setInterval(() => {
    start += 1;
    progressbar.style.width = `${start}%`;
    progressbar.style.backgroundColor = `rgb(${start * 3}, ${start * 3}, ${start})`;
    if(start >= 100) {
        clearInterval(resource);
    }
}, 30)
