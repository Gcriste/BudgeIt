const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    user:{
        type: mongooseSchema.Types.ObjectId,
        ref:'user'
    },
    category: {
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
    
  },

  limit:{type:Number},
  userid: {type: String},
  
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
