const db = require("../models");

// Defining methods for the GigsController
module.exports = {
    findAll: function(req, res) {
        db.Transaction
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
  findById: function(req,res){  
    db.Transaction
    .find({userid:req.params.userid})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  find: function(req, res) {
    db.Transaction
      .find({gigid:req.params.gigid})
      .then(dbModel => {
          console.log(dbModel)
          res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
 
 
  create: function(req, res) {
    db.Transaction
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Transaction
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Transaction
      .findById({_id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
};
