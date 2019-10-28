const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  description:{type:String},
  amount:{type:Number,required:true},
  date: {type: Date},
  userid: {type:String},
  budgetid:{type:String},
  category:{type:String}
  
})


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
