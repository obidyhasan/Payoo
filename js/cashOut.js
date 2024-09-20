// Cash Out Item
document.getElementById("cashOutItem").addEventListener("click", function () {
  setItemClicked("cashOutItem");
  showContainerById("cashOutContainer");
});

// Cash Out Button
document
  .getElementById("cashOutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoney = getInputValueById("cashOutInput");
    const cashOutPin = getInputValueById("cashOutPin");

    if (cashOutPin === 1234 && isNaN(cashOutMoney) === false) {
      const myBalance = getInnerTextById("myBalance");
      if (myBalance < cashOutMoney) {
        alert("You do not have enough balance");
        return;
      }

      const newBalance = myBalance - cashOutMoney;
      setInnerTextById("myBalance", newBalance);
    } else {
      alert("something went wrong");
    }
  });
