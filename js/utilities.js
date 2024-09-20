function getInputValueById(id) {
  const value = document.getElementById(id).value;
  return Number(value);
}

function getInnerTextById(id) {
  const text = document.getElementById(id).innerText;
  return Number(text);
}

function setInnerTextById(id, text) {
  document.getElementById(id).innerText = text;
  console.log("Update successfully");
}

function showContainerById(id) {
  document.getElementById("addMoneyContainer").classList.add("hidden");
  document.getElementById("cashOutContainer").classList.add("hidden");
  document.getElementById("transactionsContainer").classList.add("hidden");

  // container which is clicked
  document.getElementById(id).classList.remove("hidden");
}

function setItemClicked(id) {
  // document.getElementById(id).classList.add("border-blue-400 bg-blue-50");
  // document.getElementById(id).setAttribute('class',"border-blue-400 bg-blue-50")
  // document.getElementById(id).className = "border-blue-400 bg-blue-50";
  document.getElementById(id).classList.add("border-blue-400");
  document.getElementById(id).classList.add("bg-blue-50");
}
