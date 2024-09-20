// Transactions Item
document
  .getElementById("transactionsItem")
  .addEventListener("click", function () {
    setItemClicked("transactionsItem");
    showContainerById("transactionsContainer");
  });
