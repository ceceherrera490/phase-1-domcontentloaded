// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("#text");
  element.innerHTML = "This is really cool!";
  console.log(element);
});
