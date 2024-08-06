document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", changeMessage);
});

function changeMessage() {
  document.getElementById("message").textContent = "You clicked the button";
}
