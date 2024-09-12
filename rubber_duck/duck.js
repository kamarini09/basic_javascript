const duck = document.querySelector(".duck");

duck.addEventListener("mouseover", function () {
  console.log(
    "Wuuuuuuu! You finally met the lille easter duck egg! He was born to code!"
  );
});

duck.addEventListener("mouseout", function () {
  console.log("Seems like you didn't like it :((((");
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  const problemInput = document.getElementById("problemInput").value;

  console.log(problemInput);
});
