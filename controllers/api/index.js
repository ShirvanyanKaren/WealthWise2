const router = require('express').Router();
const userRoutes = require('./user.js');
const revenueRoutes = require('./revenue');
const expenseRoutes = require('./expense');
const createBudgetRoutes = require('../dashboard.js');
const budgetRoutes = require('./budget');


router.use('/user', userRoutes);
router.use('/revenue', revenueRoutes);
router.use('/expense', expenseRoutes);
router.use('/create', createBudgetRoutes);
router.use('/budget', budgetRoutes);



module.exports = router;
