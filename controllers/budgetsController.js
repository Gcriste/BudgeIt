const db = require("../models");

// Defining methods for the GigsController
module.exports = {

  findById: function(req,res){
    db.Budget
    .find({userid:req.params.userid})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  findAll: function(req, res) {
    db.Budget
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Budget
      .findById({_id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // const {food, transportation, lifestyle, housing, debt, insurance, savings, userid } = req.body
    // const budgets = {};
    //   if(food) budgets.food = food;
    //   if(transportation) budgets.transportation = transportation;
    //   if(lifestyle) budgets.lifestyle = lifestyle;
    //   if(housing) budgets.housing = housing;
    //   if(debt) budgets.debt = debt;
    //   if(insurance) budgets.insurance = insurance;
    //   if(savings) budgets.savings = savings;
    //   if(userid) budgets.userid = userid;
    db.Budget
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   create: function(req, res) {
//     db.User
//     .findOne(req.body.email)
//     .then(() => {
//         db.Budget
//       const  newBudget = {
//           category,
//           userid:req.user.id
//       }
//         .create(newBudget)
//         .then(dbModel => res.json(dbModel))
//     })
//       .catch(err => res.status(422).json(err));
//   },
  update: function(req, res) {
      db.Budget
      .findOneAndUpdate({userid: req.params.userid },  {$set: {budgets:req.body}}, { new: true, upsert: true })
      .then(()=>{
        db.Budget.findOne({userid:req.params.userid})
        .then(budget =>{
          res.status(200).json(budget)
        })
      }
        
      )
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Budget
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
};
