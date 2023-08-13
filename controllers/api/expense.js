const router = require("express").Router();
const {User, Expense } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const expenseData = await Expense.findAll({
            attributes: [
                'id',
                'expense_name',
                'user_expense_id',
                'amount',
                'description',
                'category',
                'date'
            ],
            include: [
                {
                model: User,
                attributes: [
                    'id',
                    'username'
                ]
            }
        ],
        });
        res.json(expenseData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const findExpense = await Expense.findOne({
            attributes: [
                'id',
                'expense_name',
                'user_expense_id',
                'amount',
                'description',
                'category',
                'date'
            ],
            where: {
                id: req.params.id,
            },
            include: [
                {
                model: User,
                attributes: [
                    'id',
                    'username'
                ]
            }
        ],
        });
        console.log(findExpense);
        res.json(findExpense);
    } catch (err) {
        res.status(500).json(err);
    }

});

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