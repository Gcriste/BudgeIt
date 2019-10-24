const router = require("express").Router();
const budgetsController = require("../../controllers/budgetsController");

// Matches with "/api/budgets"
router.route("/")
  .get(budgetsController.findAll)
  .post(budgetsController.create);

// Matches with "/api/budgets/:userid"
router.route("/:userid")
  .get(budgetsController.findById)

 

  router.route("/:id")
  .put(budgetsController.update)
  .get(budgetsController.find)
  .delete(budgetsController.remove);


module.exports = router;
