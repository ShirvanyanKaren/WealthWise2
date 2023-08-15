let data;

const getIncomeItems = async (user_id, budget_id) => {
  try {
    const user = user_id;
    const budget = budget_id;
    const response = await fetch(`/api/revenue/${user}/${budget_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getExpenseItems = async (user_id, budget_id) => {
  try {
    const user = user_id;
    const budget = budget_id;
    const response = await fetch(`/api/expense/${user}/${budget}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCurrentBudget = async (user_id, budget_id) => {
  try {
    const user = user_id;
    const budget = budget_id;
    const response = await fetch(`/api/budget/${user}/${budget}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const requestHandler = async (user_id, budget_id) => {
  let dataOne, dataTwo, dataThree; // Declare variables here

  try {
    console.log(user_id, budget_id);
    const [responseOne, responseTwo, responseThree] = await Promise.all([
      getIncomeItems(user_id, budget_id),
      getExpenseItems(user_id, budget_id),
      getCurrentBudget(user_id, budget_id),
    ]);

    dataOne = await responseOne.json();
    dataTwo = await responseTwo.json();
    dataThree = await responseThree.json();
  } catch (error) {
    console.log(error);
  }

  console.log(dataOne, dataTwo, dataThree);

  const data = { dataOne, dataTwo, dataThree };
  return data;
};

const getSession = async () => {
  try {
    const response = await fetch("/api/session/current", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return requestHandler(data.user_id, data.budget_id);
    }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  getSession();
});
