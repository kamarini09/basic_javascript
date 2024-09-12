//--------------------------------- selectors ---------------
// document.getElementById("box").addEventListener("click", function() {
//    if(document.getElementById("box").style.backgroundColor === "red"){
//     document.getElementById("box").style.backgroundColor = "lightblue";
//    } else{
//     document.getElementById("box").style.backgroundColor = "red";
//    }
// })

const box = document.getElementById("box");

box.addEventListener("click", function () {
  const backgroundColor = box.style.backgroundColor;
  //const {backgroundColor} = box.style;

  if (backgroundColor === "lightblue") {
    box.style.backgroundColor = "lightpink";
  } else {
    box.style.backgroundColor = "lightblue";
  }
});
//------------------ Exercise Show and Hide ----------------
const myButton = document.getElementById("myButton");
const hiddenMessage = document.getElementById("hiddenMessage");

myButton.addEventListener("mouseover", function () {
  hiddenMessage.classList.remove("hidden");
  hiddenMessage.classList.add("visible");
});

myButton.addEventListener("mouseout", function () {
  hiddenMessage.classList.remove("visible");
  hiddenMessage.classList.add("hidden");
});

//------------------------to do list -----------------------

function createToDo() {
  const newToDoTest = document.getElementById("newToDoTest").value;
  const newLi = document.createElement("li");
  newLi.textContent = newToDoTest;
  document.getElementById("todoList").appendChild(newLi);
}

document.getElementById("newToDoTest").addEventListener("keydown", function () {
  if (event.key === "Enter") {
    createToDo();
  }
});

document.getElementById("addToDo").addEventListener("click", function () {
  // alert("test")
  createToDo();
});
