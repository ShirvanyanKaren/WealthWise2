const { faker } = require('@faker-js/faker');
const { User, Expense } = require("../models");

const createUsersExpenses = async () => {
  const users = await User.findAll();

  for (const user of users) {
    const expenses = [...Array()].map((expense) => ({
      expense_name: faker.commerce.productName(),
      user_expense_id: user.id,
      amount: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      date: faker.date.past(),
    }));
    await Expense.bulkCreate(expenses);
  };
};

module.exports = createUsersExpenses;