//post
const router = require("express").Router();
const { User } = require("../../models");
const { Op } = require("sequelize");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.post("/login", async (req, res) => {
//   try {
//     console.log(req.body);
//     const userData = await User.findOne({
//       where: {
//         [Op.or]: [{ email: req.body.user }, { username: req.body.user }],
//       },
//     });

//     if (!userData) {
//       res
//         .status(404)
//         .json({ message: "Username/Email not found, please try again" });
//       return;
//     }
//     const validPassword = await userData.checkPassword(req.body.password);
//     if (!validPassword) {
//       res
//         .status(401)
//         .json({ message: "Incorrect password, please try again" });
//       return;
//     }
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
//       res.status(200).json({ user: userData, message: "You are now logged in!" });
//     });

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      where: {
        user: req.body.user,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
