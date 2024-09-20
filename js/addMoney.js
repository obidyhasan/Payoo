// Add Money Item clicked
document
  .getElementById("addMoneyItem")
  .addEventListener("click", function (event) {
    showContainerById("addMoneyContainer");
    setItemClicked("addMoneyItem");
  });

// Add Money Button
document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputValueById("addMoneyInput");
    const inputPin = getInputValueById("addMoneyPin");

    if (inputPin === 1234 && isNaN(inputValue) === false) {
      let balance = getInnerTextById("myBalance");
      const newBalance = balance + inputValue;
      setInnerTextById("myBalance", newBalance);
    } else {
      alert("something went wrong");
    }
  });
