const Budget = require('./Budget');
const Income = require('./Income');
const Expense = require('./Expense');
const User = require('./User');

User.hasMany(Budget, {
    foreignKey: 'user_budget_id',
});

Budget.belongsTo(User, {
    foreignKey: 'user_budget_id',
})

User.hasMany(Income, {
    foreignKey: 'user_budget_id',
});

Income.belongsTo(User, {
    foreignKey: 
})

User.hasMany(Expense. {
    foreignKey: 'user_budget_id',
});








module.exports = {
    Budget,
    Income,
    Expense,
    User
}