function square(num) {
  return num * num;
}

function addSquare(a, b) {
  return square(a) + square(b);
}

// fibonacci
//
// 0, 1, 1, 2, 3, 5, 8, 13;
// Factorial
// 5 Factorial
// 5 * 4 * 3 * 2 * 1

console.log(factorial(5));

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

(function sayHello() {
  console.log('Hello');
})();

function greeting(salutation = 'Hello World!') {
  console.log(salutation);
}

greeting('good evening');

function sum() {
  console.log(arguments[1]);
}
sum(1);
sum(1, 2);
sum(1, 2, 3);

function multiply(mult, sec, ...other) {
  return other.map((a) => a * mult);
}
