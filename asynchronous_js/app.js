console.log(1);
setTimeout(function() {
    console.log(3);
    let name = "Alex";
    sayHello(name);
}, 1000);
console.log(2);


function sayHello(name) {
    console.log(`Hello ${name}`);
}


// Callback function

// Promises
function showDadJoke(){
    
    const response = fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });
    response
        .then(res => res.json())
        .then(data => {
            console.log(data.joke);
            document.querySelector("h1").textContent = data.joke;
        })
        .catch(err => {
            console.error("Error fetching dad joke:", err);
        });
}
showDadJoke();

// Async/Await

async function asyncShowDadJoke(){
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });
    const data = await response.json();
    document.querySelector("h2").textContent = data.joke;
} 

(async ()=> {
    await asyncShowDadJoke()
})();
