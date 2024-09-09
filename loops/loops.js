import Book from "./Book.js";

// const numbers = [4, 8, 2.9 , 32, 12];
// let sum=0;

// for(let x of numbers) {
//     sum = sum + x;
// }

// console.log("The result is " +sum);

//----------------------------- exercise: loops & arrays -------------------------------

const myArray = ["Peter", 7, "Marianne", true, "Helle", 8];
myArray.forEach(printType);

function printType(x) {
  console.log(x + ` is a ` + typeof x);
}

//solution with array function
myArray.forEach((x) => {
  //console.log(x+ ` is a ` +typeof x);
  console.log(`${x} is a ${typeof x}`);
});

//----------------------------- exercise: loops & objects -------------------------------
//one way
const myBooks = [
  { title: "book1", author: "author1" },
  { title: "book2", author: "author2" },
  { title: "book3", author: "author3" },
  { title: "book4", author: "author4" },
  { title: "book5", author: "author5" },
];

//another way with class in my Book.js
const book = [
  new Book("To Kill a Mockingbird", "Harper Lee"),
  new Book("1984", "George Orwell"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald"),
  new Book("Pride and Prejudice", "Jane Austen"),
  new Book("Moby-Dick", "Herman Melville"),
];

const bookList = document.getElementById("books");

book.forEach((x) => {
  const li = document.createElement("li");
  li.textContent = `${book[book.indexOf(x)].title} by ${
    book[book.indexOf(x)].author
  }`;
  bookList.appendChild(li);
});

//----------------------------- if else -------------------------------
//Create a function, findLargest, that takes 4 numbers as 4 parameters
//and returns the largest of the 4 numbers.

//you can also use math.max but went the hard logic way
const largest = (num1, num2, num3, num4) => {
  if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    return num2;
  } else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
    return num3;
  } else {
    return num4;
  }
};

console.log(largest(1, 2, 3, 4));

//------------------------------------------------------------------
//Create a function that takes 3 numbers as 3 parameters. The first parameter
//is the numberto check. The 2nd and 3rd parameter is a range (from and to).
//If the first parameter is within the range of the range it should return true
// and false if not.

const myFunction = (num1, num2, num3) => {
  if (num1 > num2 && num1 < num3) {
    return true;
  } else if (num1 > num3 && num1 < num2) {
    return true;
  } else {
    return false;
  }
};

console.log(myFunction(40, 100, 20));
console.log(myFunction(4, 10, 20));
console.log(myFunction(25, 30, 20));

//----------------------------exercise: higher or lower --------------------------------------

//randomly select a number btw 1-100
const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
console.log("The random number is : " + randomNumber);
let attempts = 0;

function checkTheNumber() {
  const userNumber = document.getElementById("addNumber").value;
  console.log(userNumber);
  attempts++;
  if (userNumber > randomNumber) {
    console.log("your number is higher than the random number. Try again! ");
  } else if (userNumber < randomNumber) {
    console.log("your number is lower than the random number. Try again! ");
  } else {
    console.log(
      `You are correct!! It took you ${attempts} attempts to guess the correct number.`
    );
  }
}

document.getElementById("checkNumber").addEventListener("click", function () {
  // alert("test")
  checkTheNumber();
});
