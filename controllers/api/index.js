const router = require('express').Router();
 const userRoutes = require('./user');
// const blogRoutes = require('./expenseRountes');
// const commentRoutes = require('./dashboardRoutes');

router.use('/user', userRoutes);
// router.use('/expense', expenseRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
