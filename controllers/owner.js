const Owner = require('../models').Owner;
const Car = require('../models').Car;

module.exports = {
  listAllOwners(req, res) {
    return Owner
      .findAll({
        include: [{
          model: Car
        }],
        order: [
          ['createdAt', 'ASC'],
          [{ model: Car}, 'createdAt', 'ASC'],
        ],
      }).then(owner => {
        res.status(200).send(owner)
      }).catch(error => res.status(404).send(error));
  },
  getSingleOwner(req, res) {
    return Owner
      .findById(req.params.id, {
        include: [{
          model: Car,
        }]
      }).then(owner => {
        if(!owner) {
          res.status(404).send({
            message: 'Owner of that id not found'
          })
        } return owner
          .then(owner => {
            res.status(200).send(owner)
          }).catch(error => res.status(400).send(error))
      })
  },
  updateOwnerInfo(req,res) {
    return Owner
      .findById(req.params.id, {
        include: [{
          model: Car
        }]
      }).then(owner => {
        if(!owner) {
          res.status(404).send({
            message: 'Owner of that id does not exist'
          })
        } return owner
          .then(owner => {
            res.status(200).send(owner);
          }).catch(error => res.status(400).send(error))
      })
  },
   addOwner (req,res) {
    return Owner
      .create({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       department: req.body.department,
       telephone: req.body.telephone,
       carNo: req.body.carNo
     }).then(car => res.status(201).send(car))
      .catch((error) => res.status(400).send(error));
   },
   removeOwner(req,res) {
    return Owner
      .findById(req.params.id)
      .then(owner => {
        if(!owner) {
          res.status(404).send({
            message: 'Owner of that Id does not exist'
          })
        } return owner
          .destroy()
          .then(() => res.status(204).send({
            message: 'Owner removed successfully'
          }))
          .catch(error => res.status(400).send(error))
      })
   }
};
