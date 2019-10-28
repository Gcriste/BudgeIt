const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");


router
   .route("/")
  .get(passport.authenticate('jwt', {session:false}), usersController.findAll)
  .post(usersController.create)
//   .put(passport.authenticate('jwt', {session:false}), usersController.update);

  router
  .route("/test")
  .get(passport.authenticate('jwt', {session:false}), usersController.test)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(passport.authenticate('jwt', {session:false}), usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  router
  .route("/login")
  .post(usersController.login)



module.exports = router;
