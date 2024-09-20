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

function addMoneyTransactions(money) {
  const container = document.getElementById("listContainer");
  const div = document.createElement("div");
  div.className =
    "flex justify-between items-center bg-green-50 p-5 font-semibold rounded-md mt-3";
  div.innerHTML = `<h3>Add Money</h3>
                  <div>
                    <span>${money}</span>
                    <span>tk</span>
                  </div>`;

  container.appendChild(div);
  // console.log(div);
}

function cashOutTransactions(money) {
  const container = document.getElementById("listContainer");
  const div = document.createElement("div");
  div.className =
    "flex justify-between items-center bg-red-50 p-5 font-semibold rounded-md mt-3";
  div.innerHTML = `<h3>Cash Out</h3>
                  <div>
                    <span>${money}</span>
                    <span>tk</span>
                  </div>`;

  container.appendChild(div);
}
