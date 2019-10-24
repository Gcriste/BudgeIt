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
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
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
