const router = require('express').Router();
const { Expense, Income, User } = require('../../models');


router.get('/', async (req, res) => {
  try {
    res.render('budget', {
        logged_in: req.session.logged_in,
    })
  } catch (error) {
    res.status(500).json(error);
  }
  
});