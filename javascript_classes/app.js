class Student {
    static #currentCount = 0
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    setAge(num) {
        this.age = num;
    }

    fullName(salutation = "Mr") {
        return `${salutation} ${this.firstName} ${this.lastName}`;
    }

    static count() {
        return this.#currentCount++;
    }
}

const student_1 = new Student("Sarah", "Connor", "sarah.connor@gmail.com", 25);
Student.count();
const student_2 = new Student("Alex", "Lee", "alex.lee@gmail.com", 25);
Student.count();
            

student_1.email;
student_1.email = "sarah.c@gmail.com";
student_1.setAge(26);
student_1.age;
student_1.fullName("Ms");
student_2.fullName();

const count = Student.count();

class ProgrammerStudent extends Student {
    constructor(firstName, lastName, email, age, programmingLanguages) {
        super(firstName, lastName, email, age);
        this.programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return this.programmingLanguages;
    }

    setProgrammingLanguages(languages) {
        this.programmingLanguages = languages;
    }
}

const programmer_1 = new ProgrammerStudent("John", "Doe", "john.doe@gmail.com", 20, ["JS", "Python"]);
programmer_1.fullName("Mr");
programmer_1.getProgrammingLanguages();
programmer_1.setProgrammingLanguages(["Java", "C++"]);
programmer_1