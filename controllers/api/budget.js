const router = require("express").Router();
const { User, Expense, Income, Budget } = require("../../models");
const { useAuth } = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const budgetData = await Budget.findAll({
      attributes: [
        "id",
        "budget_name",
        "user_budget_id",
        "total_expense",
        "total_income",
        "total_savings",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "username"],
          include: {
            model: Income,
            attributes: ["id", "amount", "descrition", "category"],
            model: Expense,
            attributes: ["id", "amount", "descrition", "category"],
          },
        },
      ],
    });
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", useAuth, async (req, res) => {
  try {
    const singleBudget = await Budget.findOne({
      where: {
        id: user_budget_id,
      },
      attributes: [
        "id",
        "budget_name",
        "total_expense",
        "total_income",
        "total_savings",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "username"],
          include: {
            model: Income,
            attributes: ["id", "amount", "descrition", "category"],
            model: Expense,
            attributes: ["id", "amount", "descrition", "category"],
          },
        },
      ],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", useAuth, async (req, res) => {
  try {
    console.log(req.body.newBudgetName);
    const foundBudgets = await Budget.findAll({
      where: { user_budget_id: req.session.user_id },
    });

    if (foundBudgets.length !== 0) {
      const savedBudgets = foundBudgets.map((budget) =>
        budget.get({ plain: true })
      );

      const budgetNameExists = savedBudgets.some(
        (budget) => budget.budget_name === req.body.newBudgetName
      );

      if (budgetNameExists) {
        res.status(401).json({ message: "Budget already exists!" });
        return;
      }
    }
 
    const newBudget = await Budget.create({
      budget_name: req.body.newBudgetName,
      user_budget_id: req.session.user_id,
    });

    if (!newBudget) {
      res.status(401).json({ message: "Budget creation failed!" });
      console.error(err);
      return;
    }

    req.session.save(() => {
      req.session.budget_id = newBudget.id;
      req.session.budget_name = newBudget.budget_name;
      req.session.logged_in = true;
      res.status(200).json(newBudget);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const updateBudget = await Budget.findAll({});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    const deleteBudget = await Budget.findAll({});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
