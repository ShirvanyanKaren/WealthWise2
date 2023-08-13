const { json } = require("sequelize");

const incomeFormHandler = async (event) => {
  event.preventDefault();

  const income_name = document.querySelector("#income-name").val.trim();
  const income_amount = document.querySelector("#income-amount").val.trim();
  const category = document.querySelector("#income-category").val.trim();
  const description = document.querySelector("#income-desc").val.trim();

  if (income_name && income_amount && category) {
    const response = await fetch("/api/revenue", {
      method: "POST",
      body: JSON.stringify({
        income_name,
        income_amount,
        category,
        description,
      }),
    });
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add income');
      }
  }
};
document
  .querySelector(".add-income-form")
  .addEventListener("submit", incomeFormHandler);
