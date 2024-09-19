//ask and dispay the user's name
// const userName = prompt("What is your name?");
// const sayHi = document.getElementById("sayHi");
// sayHi.textContent = `Hi ${userName} ! So excited to see you!`;

const duck = document.querySelector(".duck");

//logs for hovering
duck.addEventListener("mouseover", function () {
  console.log(
    "Wuuuuuuu! You finally met the lille easter duck egg! He was born to code!"
  );
});

duck.addEventListener("mouseout", function () {
  console.log("Seems like you didn't like it :((((");
});
//------------------------------------------------------------------
function saveMessages(messages) {
  localStorage.setItem("messages", JSON.stringify(messages));
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  return messages;
}

function displayMessages() {
  const messageList = document.getElementById("messageList");
  messageList.innerHTML = "";

  const messages = loadMessages();

  messages.forEach((message) => {
    const now = new Date("2024-09-13");
    const li = document.createElement("li");
    li.title = `${now}`;
    li.textContent = message;
    messageList.appendChild(li);
  });
}

window.addEventListener("load", displayMessages);

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  const problemInput = document.getElementById("problemInput").value;
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ problem: problemInput }),
  });
  if (problemInput) {
    const messages = loadMessages();
    messages.push(problemInput);
    saveMessages(messages);
    displayMessages();
    document.getElementById("problemInput").value = ""; //cleans the input field
  }
  console.log(problemInput);
});

//---------------------------date-----------------------------
