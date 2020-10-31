const db = require("../models");

// Defining methods for the somethingController
module.exports = {
  findAll: function(req, res) {
    db.Something.find(req.query)
      .then(dbSomething => res.json(dbSomething))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Something.findById(req.params.id)
      .then(dbSomething => res.json(dbSomething))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Something.create(req.body)
      .then(dbSomething => res.json(dbSomething))
      .catch(err => res.status(422).json(err));
  }  
};
