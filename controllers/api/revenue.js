const router = require("express").Router();
const { de } = require("@faker-js/faker");
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
        const findIncome = await Income.findOne({
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
        console.log(findIncome);
        res.json(findIncome);
    } catch (err) {
        res.status(500).json(err);
    }

})

// add withAuth
router.post('/', async (req, res) => {
    try {
        const createIncome = await Income.create({
            income_name: req.body.income_name,
            description: req.body.description,
            amount: req.body.amount,
            category: req.body.category,
            // use session id for this
            user_income_id: req.body.user_income_id
        });
        console.log(createIncome);
        res.json(createIncome);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

router.put('/:id', async (req, res) => {
    try {
        const updateIncome = await Income.update({
                income_name: req.body.income_name,
                description: req.body.description,
                amount: req.body.amount,
                category: req.body.category,
            },
            {
                where: {
                    id: req.params.id,
                },
            });
        console.log(updateIncome);
        res.json(updateIncome);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete('/:id', async (req, res) => {
    try { 
        const deleteIncome = await Income.destroy({
            where: {
                id: req.params.id
            },
        });
        if (!deleteIncome) {
            res.status(400).json({ message: 'No income with that id'})
          }
          res.status(200).json(deleteIncome);
    } catch (err) {
        res.status(500).json('Error in finding income');
    }

});

module.exports = router;