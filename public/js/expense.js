const expenseTable = document.querySelector("#expense-table");

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
      createExpenseTable(expenseTable, "/api/expense");
    } else {
      expenseResult.textContent = response.statusText;
      expenseResult.style.color = "red";
    }
  }
};

const createExpenseTable = async (location, path) => {
  const tableData = await getTableData(path);
  if (!tableData) {
    return;
  }
  new Tabulator(location, {
    data: tableData,
    resizableColumnFit:true,
    columns: [
      { title: "ID", field: "id" },
      { title: "Expense Name", field: "expense_name" },
      {
        title: "Amount",
        field: "amount",
        formatter: "money",
        formatterParams: { precision: 2, symbol: "$" },
      },
    ],
  });
};

document
  .querySelector(".expense")
  .addEventListener("submit", expenseFormHandler);

document.addEventListener("DOMContentLoaded", () => {
  createExpenseTable(expenseTable, "/api/expense");
});
