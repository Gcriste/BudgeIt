const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user: {
      type:Schema.Types.ObjectId,
      ref:'users'
  },
  budget:{
      type:Schema.Types.ObjectId,
      ref:'budgets'
  },
  description:{type:String},
  amount:{type:Number,required:true},
  date: {type: Date},
  userid: {type:String},
  budgetid:{type:String}
  
},

{ timestamps: {} });

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
