const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
        logged_in: req.session.logged_in,
      })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.use("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
      })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
