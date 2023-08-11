const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model {}
Budget.init(
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        budget_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_budget_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        total_expense: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        total_income: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        total_savings: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'budget',
        },
)

module.exports = Budget;
