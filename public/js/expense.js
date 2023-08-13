const expenseFormHandler = async (event) => {
  event.preventDefault();

  const expense_name = document.querySelector("#expense-name").value;
  const amount = document.querySelector("#expense-amount").value;
  const category = document.querySelector("#expense-category").value;
  const description = document.querySelector("#expense-desc").value;
  const expenseResult = document.querySelector(".expense-result");

  if (isNaN(amount)) {
    expenseResult.textContent = "Please enter a valid amount.";
    expenseResult.style.color = "red";
    return;
  }

  if (!expense_name) {
    expenseResult.textContent = "Please enter a valid expense name.";
    expenseResult.style.color = "red";
    return;
  }

  if (expense_name && amount && category) {
    const response = await fetch("/api/expense", {
      method: "POST",
      body: JSON.stringify({
        expense_name,
        amount,
        category,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      expenseResult.textContent = "Added Expense Item";
      expenseResult.style.color = "green";
    } else {
      expenseResult.textContent = response.statusText;
      expenseResult.style.color = "red";
    }
  }
};

document
  .querySelector(".expense")
  .addEventListener("submit", expenseFormHandler);
