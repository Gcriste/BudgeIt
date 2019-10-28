const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },

        food: {
            type:Number
        },
        transportation: {
            type:Number
        },
        lifestyle: {
            type:Number
        },
        housing: {
            type:Number
        },
        debt: {
            type:Number
        },
        insurance: {
            type:Number
        },
        savings: {
            type:Number
        },

  limit:{type:Number},
  userid: {type: String},
},
  { timestamps: {} }
  
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
