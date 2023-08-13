const router = require('express').Router();
const {User, Expense, Income, Budget} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const budgetData = await Budget.findAll({
            attributes: [
                'id',
                'budget_name',
                'user_budget_id',
                'total_expense',
                'total_income', 
                'total_savings'
            ],
            include: [
                {
                model: User,
                attributes: [
                    'id',
                    'username'
                ], 
                include: {
                    model: Income,
                    attributes: [
                        'id',
                        'user_income_id',
                        'amount',
                        'dexcrition',
                        'category',
                    ],
                    model: Expense,
                    attributes: [
                        'id',
                        'user_expense_id',
                        'amount',
                        'dexcrition',
                        'category',
                    ]
                }
            },
            ]
        })
        res.json(userData);
    } catch (err) {
        res.status(500).json(err)

    }
})


router.get('/:id', async (req, res) => {
    try {
        const singleBudget = await Budget.findOne({
            
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/', async (req, res) => {
    try {
        const createBudget = await Budget.findAll({
            
        })
    } catch (err) {

    }
})


router.put('/', async (req, res) => {
    try {
        const updateBudget = await Budget.findAll({
            
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/', async (req, res) => {
    try {
        const deleteBudget = await Budget.findAll({
            
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;