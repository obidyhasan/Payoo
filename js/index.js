const number = document.getElementById("number");
const pin = document.getElementById("pin");

document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  if (number.value === "01625319213" && pin.value === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Invalid Number or Pin!!!");
  }
});
