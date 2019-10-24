const router = require("express").Router();
const budgetRoutes = require("./budgets");
const userRoutes = require("./users");
const transactionRoutes = require("./transactions");

// routes
router.use("/budgets", budgetRoutes);
router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
 