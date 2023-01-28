const student = {};
student.name = 'Akash';
student.speciality = 'batman';
student.bat = function () {
    console.log('Hello Fellows!');
}

// console.log(student);
// student.bat();

const player = {
    name: 'panda',
    job: 'bash khawa',
    ball: function () {
        console.log('tor je koita amaro shei koitai BC!');
    },
    salary: 200000

}

const person = new Object();
// console.log(person);

const newPerson = Object.create(player);
// console.log(newPerson);
// console.log(newPerson.job);

class Person {
    name = 'Fahiim';
    address = 'Doulotdia';
    job;
    age;
    constructor(age, job) {
        this.age = age;
        this.job = job;
    }
}
const person1 = new Person('Mara Khawa', 102);
console.log(person1.age, person1.job);