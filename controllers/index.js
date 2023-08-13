const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const apiRoutes = require("./api");
const createBudgetRoutes = require('./createBudget')

router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use('/create', createBudgetRoutes);

module.exports = router;
