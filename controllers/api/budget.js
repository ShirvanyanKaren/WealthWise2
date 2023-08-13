const router = require('express').Router();
const {User, Expense, Income, Budget} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const budgetData = await Budget.findAll({

        })
    } catch (err) {

    }
})


router.get('/:id', async (req, res) => {
    try {
        const singleBudget = await Budget.findOne({
            
        })
    } catch (err) {

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

    }
})

router.delete('/', async (req, res) => {
    try {
        const deleteBudget = await Budget.findAll({
            
        })
    } catch (err) {

    }
})