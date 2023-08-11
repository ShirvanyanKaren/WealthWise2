const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model {}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        expense_name: {
            type: DataTypes.STRING,
            allowNull: false,
         
        },
        user_expense_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
         
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        date: {
            type: DataTypes.DATE,

        }

    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'expense',
    },
);



module.exports = Expense;