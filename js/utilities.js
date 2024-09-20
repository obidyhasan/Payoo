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
}

function showContainerById(id) {
  document.getElementById("addMoneyContainer").classList.add("hidden");
  document.getElementById("cashOutContainer").classList.add("hidden");
  document.getElementById("transactionsContainer").classList.add("hidden");

  // container which is clicked
  document.getElementById(id).classList.remove("hidden");
}

let lastId = null;
function setItemClicked(id) {
  if (lastId !== null) {
    document.getElementById(lastId).classList.remove("border-blue-400");
    document.getElementById(lastId).classList.remove("bg-blue-50");
  } else {
    document.getElementById("addMoneyItem").classList.remove("border-blue-400");
    document.getElementById("addMoneyItem").classList.remove("bg-blue-50");
  }

  document.getElementById(id).classList.add("border-blue-400");
  document.getElementById(id).classList.add("bg-blue-50");

  lastId = id;
}
