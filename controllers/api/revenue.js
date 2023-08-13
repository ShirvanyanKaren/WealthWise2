const router = require("express").Router();
const {User, Income } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const incomeData = await Income.findAll({
            attributes: [
                'id',
                'income_name',
                'user_income_id',
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
        res.json(incomeData);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.get('/:id', async (req, res) => {
    try {
        const findIncome = findOne({
            attributes: [
                'id',
                'income_name',
                'user_income_id',
                'amount',
                'description',
                'category',
                'date'
            ],
            where: {
                id: req.params.id
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
        res.json(findIncome);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.post('/', async (req, res) => {
    try {
        const createIncome = await Income.create({
            income_name: req.params.income_name,
            description: req.params.description,
            amount: req.params.amount,
            category: req.params.category,
            user_income_id: req.params.user_income_name
        });
        res.json(createIncome);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

router.put('/', async (req, res) => {
    try {
        const updateIncome = await Income.update({
            income_name: req.params.income_name,
            description: req.params.description,
            amount: req.params.amount,
            category: req.params.category
        });
        res.json(updateIncome);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.delete('/', async (req, res) => {
    try { 
        const deleteIncome = await Income.destroy({
            where: {
                id: req.params.id
            },
        });
        if (!deleteIncome) {
            res.status(400).json({ message: 'No income with that id'})
          }
    } catch (err) {
        res.status(500).json('Error in finding income');
    }

})

module.exports = router;