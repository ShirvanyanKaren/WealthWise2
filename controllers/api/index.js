const router = require('express').Router();
const userRoutes = require('./user.js');
const revenueRoutes = require('./revenue');

router.use('/user', userRoutes);
router.use('/revenue', revenueRoutes);

module.exports = router;
