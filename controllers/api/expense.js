const router = require("express").Router();
const {User, Expense } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const expenseData = await Expense.findAll({

        });
    } catch (err) {
        res.status(500).json(err);
    }


})

router.get('/:id', async (req, res) => {
    try {
        const findExpense = await Expense.findOne({

        });
    } catch (err) {
        res.status(500).json(err);
    }


})

router.post('/', async (req, res) => {
    try {
        const createExpense = await Expense.create({

        });
    } catch (err) {
        res.status(500).json(err);
    }


})

router.put('/', async (req, res) => {
    try {
        const updateExpense = await Expense.findAll({

        });
    } catch (err) {
        res.status(500).json(err);
    }


})

router.delete('/:id', async (req, res) => {
    try {
        const deleteExpense = await Expense.destroy({

        });
    } catch (err) {
        res.status(500).json(err);
    }


})

module.exports = router;