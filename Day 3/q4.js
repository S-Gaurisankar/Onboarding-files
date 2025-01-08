class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name,age, position, salary) {
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    work(){
        console.log(`I'm working as a ${this.position}.`);
    }
    introduce_work(){
        super.introduce();
        this.work();
    }
}

const person1 = new Person('Jyothish', 22);
const employee1 = new Employee('Gaurisankar',22,'developer', 25000);

person1.introduce();
employee1.introduce();
employee1.work();
employee1.introduce_work();