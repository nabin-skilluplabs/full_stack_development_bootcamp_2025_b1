// Conditions
// if..else statement
const today = 'Monday';

if (today === 'Sunday') {
  console.log('Today is Sunday!');
} else if (today === 'Monday') {
  console.log('Today is Monday');
} else if (today === 'Saturday' || today === 'Friday') {
  console.log('Today is fun day!');
} else {
  console.log('Too tired to work!');
}

//switch statement
switch (today) {
  case 'Sunday':
    console.log('Today is Sunday!');
    break;
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Saturday':
  case 'Friday':
    console.log('Today is fun day!');
    break;
  default:
    console.log('Too tired to work!');
}

// Exception handling
try {
  console.log('This is error handling code');
  throw Error();
} catch (error) {
  console.log(error);
}
console.log('Rest of the code...');

// try {
//   let mobile = prompt('Enter your mobile number');
//   if (isNaN(Number(mobile))) {
//     throw Error('This is not valid number');
//   }
//   console.log('Send sms to ' + mobile);
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log('This is finally block!');
// }

// Loops
// for loop
for (let i = 1; i <= 1000; i = i * 5) {
  console.log(i);
}

let j = 100;
do {
  console.log('j=', j);
  j++;
} while (j < 100);

let k = 1;
while (k < 100) {
  console.log('k = ', k);
  k++;
}

let student = {
  firstName: 'Alex',
  lastName: 'Lee',
  email: 'alex.lee@gmail.com',
  mobile: '0420400125',
};

for (a in student) {
  console.log(a, student[a]);
}
console.log(student.firstName);

let months = ['Jan', 'Feb', 'March'];
for (a of months) {
  console.log(a);
}
months[1];

for (let l = 1; l < 10; l++) {
  if (l == 5 || l == 8) {
    continue;
  }
  console.log('l = ', l);
  if (l == 4) {
    break;
  }
}

// nested loops
for (let i = 2; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + '=' + i * j);
  }
  console.log('-----------------------');
}

// Functions

function multiplicationTable(i) {
  try {
    if (isNaN(i)) {
      throw Error(i + ' is not a valid number');
    }
    for (let j = 1; j <= 10; j++) {
      console.log(i + '*' + j + '=' + i * j);
    }
  } catch (e) {
    console.log(e.message);
  }
}

multiplicationTable(255);
multiplicationTable(999);
multiplicationTable('hello');
multiplicationTable(22);
