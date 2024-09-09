import  Book  from "./Book.js"

// const numbers = [4, 8, 2.9 , 32, 12];
// let sum=0;

// for(let x of numbers) {
//     sum = sum + x;
// }

// console.log("The result is " +sum);

//----------------------------- exercise: loops & arrays -------------------------------

const myArray = ['Peter', 7, 'Marianne' , true , 'Helle', 8];
myArray.forEach(printType);

function printType(x){
    console.log(x+ ` is a ` +typeof x);
}

//solution with array function
myArray.forEach(x =>{
    //console.log(x+ ` is a ` +typeof x);
    console.log(`${x} is a ${typeof x}`)
})



//----------------------------- exercise: loops & objects -------------------------------
 //one way
const myBooks = [
    {title: "book1",
     author: "author1"   
    },
    {title: "book2",
     author: "author2"   
    },
    {title: "book3",
     author: "author3"   
     },
    {title: "book4",
     author: "author4"   
    },
    {title: "book5",
    author: "author5"   
     },

]

//another way with class in my Book.js 
const book = [
    new Book("First Book", "First Author"),
    new Book("Second Book", "Second Author"),
    new Book("Third Book", "Third Author"),
    new Book("Forth Book", "Forth Author"),
    new Book("Fifth Book", "Fifth Author"),
]

// book.forEach(x=>{
//     const bookList = document.getElementById("book").value;
//     const newLi = document.createElement("li");
//     newLi.textContent = book[book.indexOf(x)].title + " ";
//     document.getElementById("book".appendChild(newLi))
//     console.log(newLi)
//     //console.log(book[book.indexOf(x)].title + " ")
// })




//----------------------------- if else -------------------------------

//you can also use math.max
const largest = (num1, num2, num3, num4) =>{
   if (num1>= num2 && num1 >= num3 && num1>=num4){
    return num1;
   }else if (num2>= num1 && num2 >=num3 && num2>=num4){
    return num2;
   }else if(num3>= num1 && num3 >=num2 && num3 >= num4){
    return num3;
   }else {
    return num4;
   }
}


console.log(largest(1, 2, 3, 4))


//------------------------------------------------------------------

const myFunction = (num1, num2 , num3) => {
    if (num1> num2 && num1 < num3 ){
        return true;
       }else if (num1>num3 && num1 <num2){
        return true;
       }else {
        return false;
       }
}

console.log(myFunction(40, 100, 20))