import { Cat } from "./Cat.js"

let name = 'Kamarini';
const birthDate = new Date(1995, 4, 9);
console.log(name);
console.log(birthDate);

//------------------------- name function---------------------
function getToKnow(firstName, lastName){
   // return firstName + " " +  lastName;
   console.log ("Your name is " + firstName + " " + lastName)
}


getToKnow("kama" , "mor")


//------------------------- rectangle function---------------------

function rectangleArea (length , width){
    return  length * width;
    
}

console.log(rectangleArea(20,10));


//------------------------- speed function---------------------
 
function getDinstance(speed, time){
   let distance = speed * time;
   return distance;
}

console.log("You have travelled " + getDinstance(60, 60) + "km")

//------------------------- object---------------------

let calculator = {
    yourName : 'Kamarini',
    getToKnow: function(firstName, lastName){
      console.log ("Your name is " + firstName + " " + lastName)},

    getDinstance: (speed, time)=> {
        return speed * time
    }


}

const person1 = calculator.getToKnow('kam' , 'mk')
const distance2 = calculator.getDinstance(30 , 20);
console.log(`your distance is  ${distance2} `)


//-------------------------- cat---------------------------

const cat1 = new Cat( 'Emma' , 'Blue' , 'Fankie')
cat1.getCatInfo();


//change name
function changeName(){
    cat1.name = 'Clara'
    console.log(cat1.name)
}


changeName();
cat1.getCatInfo();







//--------------------------------- selectors ---------------
// document.getElementById("box").addEventListener("click", function() {
//    if(document.getElementById("box").style.backgroundColor === "red"){
//     document.getElementById("box").style.backgroundColor = "lightblue";
//    } else{
//     document.getElementById("box").style.backgroundColor = "red";
//    }
// })



const box = document.getElementById("box");

box.addEventListener("click", function() { 
  const backgroundColor = box.style.backgroundColor;
   //const {backgroundColor} = box.style;
   
    if(backgroundColor === "red"){
      box.style.backgroundColor = "lightblue";
    } else{
     box.style.backgroundColor = "red";
    }
 })


//  const myButton = document.getElementById("button");

// myButton.addEventListener( "mouseenter",
//     function(){
//      if (myButton.classList.remove("hidden")){
//       myButton.classList.add("visible")
//      }
//     },
//     false,
//   );


//------------------ to do list ----------------

function createToDo(){
  const newToDoTest = document.getElementById("newToDoTest").value;
 const newLi = document.createElement("li");
 newLi.textContent = newToDoTest;
 document.getElementById("todoList").appendChild(newLi);
}

document.getElementById("newToDoTest").addEventListener("keydown", function(){
    if (event.key ==="Enter"){
      createToDo();
    }
})

document.getElementById("addToDo").addEventListener("click", function(){
 // alert("test")
  createToDo();

})