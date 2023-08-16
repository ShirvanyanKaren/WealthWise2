const router = require("express").Router();
const { User, Expense, Income, Budget } = require("../models");
const { useAuth } = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    if (req.session.user_id) {
    const userBudgets = await Budget.findAll({
      attributes: [
        "id",
        "budget_name",
        "total_expense",
        "total_income",
        "total_savings",
      ],
      where: {
        user_budget_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
          include: [
            {
              model: Income,
              attributes: ["id", "amount", "description", "category"],
            },
            {
              model: Expense,
              attributes: ["id", "amount", "description", "category"],
            },
          ],
        },
      ],
    });
    const budgets = userBudgets.map((budget) => budget.get({ plain: true }));
    console.log(budgets);
  
    res.render("homepage", {
      budgets,
      logged_in: req.session.logged_in,
    });
  } else {
    res.render("homepage");
  }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.use("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/logout", useAuth, (req, res) => {
  try {
    req.session.destroy(() => {
      res.render("logoutconfirm");
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/items", useAuth, async (req, res) => {
  try {
    res.render("items", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/items/:id", useAuth, async (req, res) => {
  try {

    req.session.budget_id = req.params.id;
    req.session.save();

    console.log(req.session.budget_id)
    
    res.render("items", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/budget/:id", useAuth, async (req, res) => {
  try {
    req.session.budget_id = req.params.id;
    req.session.save();

    console.log(req.session.budget_id)

    res.render("budgetAnalysis", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/budget", useAuth, async (req, res) => {
  try {
    res.render("budgetAnalysis", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
