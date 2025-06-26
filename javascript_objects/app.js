// Objects
// Object Literals

let student = {
    firstName: "Alex",
    lastName: "Lee",
    email: "alex.lee@gmail.com",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Student name is : " + student.firstName);
console.log("Student full name is: " + student.fullName());

// Create an object to store different part of the address. this object Should have method called getCompleteAddress() which will return complete address. 

const address = {
    unit: "31",
    street: "10 Bridge St",
    surburb: "Granville",
    postCode: "2142",
    state: "NSW",
    getCompleteAddress: function() {
        const completeAddress = `${this.unit} / ${this.street},${this.surburb} ${this.postCode},${this.state}`;
        return completeAddress;
    }
}

console.log(`My full address is ${address.getCompleteAddress()}`);

student.firstName = "Brad";
student.address = address;
console.log(student)

// Constructor Function
function Student(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age;
    this.fullName = function(salutation = "Mr") {
        return  salutation + " " + this.firstName + " " + this.lastName;
    }

    this.setAge = function (num) {
        this.age = num;
    }
}

const student_1 = new Student("Jim", "Lee", "jim.lee@gmail.com");
student_1.setAge(20) ;
const student_2 = new Student("Vincent", "He", "vincent.he@gmail.com");
const student_3 = new Student("Jacky", "Ma", "jacky.ma@gmail.com");

console.log(`There are 3 students with name: ${student_1.firstName}, ${student_2.lastName}, ${student_3.lastName}. Their full name is ${student_1.fullName()}, ${student_2.fullName("They/Them")}, ${student_3.fullName("Mrs")}. ${student_1.firstName}'s age is ${student_1.age};`);



// Object.create


const animal = {
    type: "Invertebrates", 
    displayType() {
      console.log(this.type);
    },
  };
  
  

const animal1 = Object.create(animal);
animal1.displayType(); 

// Create new animal type called fish
const fish = Object.create(animal);
fish.name = "Fishy";
fish.displayType();

for(key in student_1) {
    console.log(student_1[key])
}
delete fish.name;

console.log(Object.keys(fish));
console.log(Object.getOwnPropertyNames(fish))
// Class