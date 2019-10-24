const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// Matches with "/api/transactions"
router.route("/")
  .get(transactionsController.findAll)
  .post(transactionsController.create);


  router.route("/:userid")
  .get(transactionsController.findById);

// Matches with "/api/transactions/gigs/:gigid"
router.route("/:gigid")
  .get(transactionsController.find)
  .put(transactionsController.update);
  

router.route("/:id")
  .delete(transactionsController.remove);

module.exports = router;
