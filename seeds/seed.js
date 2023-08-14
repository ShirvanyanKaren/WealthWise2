const createUsers = require("./createUsers");
const createUsersIncomes = require("./createUsersIncomes");
const createUsersExpenses = require("./createUsersExpenses");
const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true })
    await createUsers()
    await createUsersIncomes()
    await createUsersExpenses()
  } catch (err) {
    console.log(err);
  }
};

createUsersExpenses();