const router = require('express').Router();
const userRoutes = require('./user.js');
const revenueRoutes = require('./revenue');
const expenseRoutes = require('./expense');


router.use('/user', userRoutes);
router.use('/revenue', revenueRoutes);
router.use('/expense', expenseRoutes);



module.exports = router;
