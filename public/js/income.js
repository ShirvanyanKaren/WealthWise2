const incomeTable = document.querySelector("#income-table");
const incomeFormHandler = async (event) => {
  event.preventDefault();
  
  const income_name = document.querySelector("#income-name").value;
  const amount = document.querySelector("#income-amount").value;
  const category = document.querySelector("#income-category").value;
  const description = document.querySelector("#income-desc").value;
  const incomeResult = document.querySelector(".income-result");
  
  await incomeTable.redraw(true);

  if (isNaN(amount)) {
    incomeResult.textContent = "Please enter a valid amount.";
    incomeResult.style.color = "red";
    return;
  }
  
  if (!income_name) {
    incomeResult.textContent = "Please enter a valid income name.";
    incomeResult.style.color = "red";
    return;
  }
  
  if (income_name && amount && category) {
    const response = await fetch("/api/revenue", {
      method: "POST",
      body: JSON.stringify({
        income_name,
        description,
        amount,
        category,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      incomeResult.textContent = "Added Income Item";
      incomeResult.style.color = "green";
    } else {
      incomeResult.textContent = response.statusText;
      incomeResult.style.color = "red";
    }
  }
};

const createTable = async (location, path) => {
  const tableData = await getTableData(path);
  if (!tableData) {
    return;
  }
  const table = new Tabulator(location, {
    data: tableData,
    responsiveLayout: true,
    responsiveLayout: "hide",
    resizableColumns: false,
    layout: "fitColumns",
    height: "100%",
    width: "50%",
    columns: [
      { title: "Income Name", field: "income_name", frozen: true },
      {
        title: "Amount",
        field: "amount",
        formatter: "money",
        formatterParams: { precision: 2, symbol: "$" },
      },
      { title: "Description", field: "description" },
    ],
  });
};

document.querySelector(".income").addEventListener("submit", incomeFormHandler);
document.addEventListener("DOMContentLoaded", () => {
  createTable(incomeTable, "/api/revenue");
});
