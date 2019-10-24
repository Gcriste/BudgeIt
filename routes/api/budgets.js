const router = require("express").Router();
const budgetsController = require("../../controllers/budgetsController");

// Matches with "/api/budgets"
router.route("/")
  .get(budgetsController.findAll)
  .post(budgetsController.create);

// Matches with "/api/budgets/:userid"
router.route("/:userid")
  .get(budgetsController.findById)
  .put(budgetsController.update)
 

  router.route("/:id")
  .get(budgetsController.find)
  .delete(budgetsController.remove);


module.exports = router;
