
const incomeFormHandler = async (event) => {
  event.preventDefault();

  const income_name = document.querySelector("#income-name").value;
  const amount = document.querySelector("#income-amount").value;
  const category = document.querySelector("#income-category").value;
  const description = document.querySelector("#income-desc").value;

  if (income_name && amount && category) {
    const response = await fetch("/api/revenue", {
      method: "POST",
      body: JSON.stringify({
        income_name,
        description,
        amount,
        category
        
      }),
      headers: {
        'Content-Type': 'application/json'
    },
    });
    if (response.ok) {
        console.log('added income');
      } else {
        console.log(income_name);
        console.log(income_amount);
        console.log(category);
        console.log(description);
        alert('Failed to add income');
      }
  }
};

document
  .querySelector(".income")
  .addEventListener("submit", incomeFormHandler);
  