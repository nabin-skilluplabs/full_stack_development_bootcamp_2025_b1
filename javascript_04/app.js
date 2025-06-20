// Arrow function
let firstName = 'Alex';

console.log(firstName);
console.log(sayHelloOld(firstName));

const sayHello = name => 'Hello ' + name;

function sayHelloOld(name) {
    let greeting = "Hello ";
    return greeting + name;
}

// Write an arrow function to get length of string
const strLen = (str) => str.length;

console.log(strLen('Alex'))

// 
let numbers = [1, 2, 3, 4, 6, 9, 6, 8 , 9 ,10,0 ];
for(let i = 0; i < numbers.length - 1; i++) {
    console.log(numbers[i] * 2 + 5);
}

for(j in numbers) {
    console.log(numbers[j] * 10)
}

const fakeNumbers =  numbers.forEach((num) => console.log(num * 2));
const doubleNumbers = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter(a => a % 2 === 0);
numbers.push(11);
numbers.pop();
numbers.unshift(100);
numbers.shift();

const slices =   numbers.slice(4, 6);
const sortedNumbers = numbers.sort((a, b) =>  b - a);
numbers
slices