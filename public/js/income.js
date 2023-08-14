const incomeFormHandler = async (event) => {
  event.preventDefault();

  const income_name = document.querySelector("#income-name").value;
  const amount = document.querySelector("#income-amount").value;
  const category = document.querySelector("#income-category").value;
  const description = document.querySelector("#income-desc").value;
  const incomeResult = document.querySelector(".income-result");

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

document.querySelector(".income").addEventListener("submit", incomeFormHandler);
