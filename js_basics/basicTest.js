import { Cat } from "./Cat.js";
import { Car } from "./Car.js";

let name = "Kamarini";
const birthDate = new Date(1995, 4, 9);
console.log(name);
console.log(birthDate);
console.log("----------------------------------");

//------------------------- name function---------------------
function getToKnow(firstName, lastName) {
  // return firstName + " " +  lastName;
  console.log("Your name is " + firstName + " " + lastName);
}

getToKnow("Kamarini", "Moragianni");
console.log("----------------------------------");

//------------------------- rectangle function---------------------

function rectangleArea(length, width) {
  return length * width;
}

console.log(rectangleArea(20, 10));
console.log("----------------------------------");

//------------------------- speed function---------------------

function getDinstance(speed, time) {
  let distance = speed * time;
  return distance;
}

console.log("You have travelled " + getDinstance(60, 60) + "km");

console.log("----------------------------------");

//------------------------- object---------------------

let calculator = {
  yourName: "Kamarini",
  getToKnow: function (firstName, lastName) {
    console.log("Your name is " + firstName + " " + lastName);
  },

  getDinstance: (speed, time) => {
    return speed * time;
  },
};

const person1 = calculator.getToKnow("kam", "mk");
const distance2 = calculator.getDinstance(30, 20);
console.log(`your distance is  ${distance2} `);

console.log("----------------------------------");

//-------------------------- cat---------------------------

const cat1 = new Cat("Emma", "Blue", "Fankie");
cat1.getCatInfo();

//change name
function changeName() {
  cat1.name = "Clara";
  console.log(cat1.name);
}

changeName();
cat1.getCatInfo();
console.log("----------------------------------");

//-------------------------------exercise car---------------------------------

const car1 = new Car("Toyota", "Corola", "2010");
const car2 = new Car("Hudai", "Corsa", "2000");

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car1.start());
console.log(car2.start());
console.log(car1.stop());
console.log(car2.stop());
console.log("----------------------------------");

//-------------------------------EXERCISE: ARRAYS---------------------------------
const names = ["Maria", "Amine", "Louisa", "Emil", "Anna"];
console.log(names[0]);
console.log(names.indexOf("Amine"));
console.log(names.indexOf("Kamarini"));

names.push("Sarah");
console.log(names);

const names2 = names.slice(0, 3);
console.log(names2);

const firstPerson = {
  firstname: "Jonas",
  lastname: "Erriksen",
  email: "jonaser@gmail.dk",
};

const secondPerson = {
  firstname: "Emil",
  lastname: "Flue",
  email: "emilflue@gmail.dk",
};

const People = [firstPerson, secondPerson];
console.log(People);
console.log(People[0].email);
console.log("----------------------------------");

//----------------Student Grades Management-------------------

const Student = {
  studentName: "Rasmus",
  id: 12345,
  grades: [7, 12, 4],
};

function addGrade(student, grade) {
  Student.grades.push(grade);
}
addGrade(Student, 12);
console.log(`The new grades of ${Student.studentName} are : ${Student.grades}`);

function updateStudentName(Student, newName) {
  Student.studentName = newName;
}

updateStudentName(Student, "Jens");
console.log(`The student name is now updated to: ${Student.studentName}`);
console.log("----------------------------------");
