const router = require('express').Router();
const revenueRoutes = require('./revenue');
// const blogRoutes = require('./expenseRountes');
// const commentRoutes = require('./dashboardRoutes');

router.use('/revenue', revenueRoutes);
// router.use('/expense', expenseRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
