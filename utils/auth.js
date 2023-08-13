const toggleAuth = true;

const useAuth = (req, res, next) => {
  const shouldAuthenticate = toggleAuth && !req.session.logged_in;
  shouldAuthenticate ? res.render("unauthorized") : next();
};

module.exports = { useAuth };
