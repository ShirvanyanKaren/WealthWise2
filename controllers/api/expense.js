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

// add withAuth
router.post('/', async (req, res) => {
    try {
        const createExpense = await Expense.create({
            expense_name: req.body.expense_name,
            description: req.body.description,
            amount: req.body.amount,
            category: req.body.category,
            // use session id for this
            user_expense_id: req.body.user_expense_id
        });
        console.log(createExpense);
        res.json(createExpense);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

router.put('/:id', async (req, res) => {
    try {
        const updateExpense = await Expense.update({
                expense_name: req.body.expense_name,
                description: req.body.description,
                amount: req.body.amount,
                category: req.body.category,
                
            },
            {
                where: {
                    id: req.params.id,
                },
            });
             if (updateExpense[0] === 0) {
                res.status(400).json({ message: 'Please provide a name, category, and amount to the expense'})
              }
        console.log(updateExpense);
        res.json(updateExpense);
    } catch (err) {
        console.log(err);
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