const Car = require('../models').Car;
const ParkingSpace = require('../models').ParkingSpace;

module.exports = {
  listAll(req, res) {
    return ParkingSpace
      .findAll({
        include: [{
          model: Car
        }],
        order: [
          ['createdAt', 'ASC'],
          [{ model: Car}, 'createdAt', 'ASC'],
        ],
      }).then(space => {
        res.status(200).send(space)
      }).catch(error => res.status(404).send(error));
  },
  getSingle(req,res) {
    return ParkingSpace
      .findById(req.params.id, {
        include: [{
          model: Car,
        }],
      })
      .then((space) => {
        if (!space) {
          return res.status(404).send({
            message: 'No existing parking space',
          });
        }
        return res.status(200).send(space);
      })
      .catch((error) => res.status(400).send(error));
  }
};
