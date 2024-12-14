document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", changeMessage);

  const faithingButton = document.getElementById("faithingButton");
  faithingButton.addEventListener("click", function () {
    window.location.href = "faithingPage.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Логика кнопки "Back to Home"
  const backToHomeButton = document.getElementById("backToHomeButton");
  backToHomeButton.addEventListener("click", function () {
    window.location.href = "index.html"; // Путь к домашней странице
  });
});

function changeMessage() {
  document.getElementById("message").textContent = "You clicked the button";
}

function dronControl() {
  document.getElementById("control").managementContent =
    "You can controlled drone";
}
