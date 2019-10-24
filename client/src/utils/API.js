import axios from "axios";

export default {

  getUsers:function(){
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  saveUser: function(savedUsers) {
    console.log(savedUsers)
    return axios.post("/api/users", savedUsers)
   
    .then(response => {
      console.log(response.data)
      
    })
    .catch(err=> {
      console.log(err)
    })
  },
  logsUser: function(){
    return axios.post("/api/users/login");
  },

  test:function(){
    return axios.get("/api/users/test")
  },

  //gets all budgets
  getBudgets: function() {
    return axios.get("/api/budgets");
  },


  //gets budgets by userId
  getBudgetByUser:function(userId){
    return axios.get("/api/budgets/" + userId);
  },
  // Gets the budget by budgetId
  getBudgetById: function(id) {
    return axios.get("/api/budgets/?_id=" + id);
  },
  // Deletes the budget with the given id
  deleteGig: function(id) {
    return axios.delete("/api/budgets/" + id);
  },


  // Saves budgets to the database
  saveBudget: function() {
    return axios.post("/api/budgets");
  },

  //post Transaction
  postTransaction: function(savedTransaction){
    return axios.post("/api/transactions", savedTransaction)
  },

  //get all transactions
  getTransactions:function(){
    return axios.get("/api/transactions");
  },

  //get transaction by budgetId
  getTransactionByBudget:function(budgetId){
    return axios.get("/api/transactions/?budgetid=" + budgetId)
  },

  //get transactions by userId
  getTransactionByUser:function(userId){
    return axios.get("/api/transactions/" + userId)
  },

  //delete transaction
  deleteTransaction:function(id){
    return axios.delete("/api/transactions/" + id)
  }
  

};
