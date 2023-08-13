const router = require('express').Router();
const userRoutes = require('./user.js');
const revenueRoutes = require('./revenue');
const expenseRoutes = require('./expense');
const createBudgetRoutes = require('./dashboard');


router.use('/user', userRoutes);
router.use('/revenue', revenueRoutes);
router.use('/expense', expenseRoutes);
router.use('/create', createBudgetRoutes);



module.exports = router;
