const Car = require('../models').Car;
const Owner = require('../models').Owner;

module.exports = {
  listCars(req, res) {
    return Car
      .findAll({
        include: [{
          model: Car,
        }, {
          model: Owner,
        }],
        order: [
          ['createdAt', 'ASC'],
          [{ model: Car}, 'createdAt', 'ASC'],
        ],
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => { res.status(400).send(error); });
  },
  getCarById(req, res) {
    return Car
      .findById(req.params.id, {
        include: [{
          model: Car,
        }, {
          model: Owner,
        }],
      })
      .then((car) => {
        if (!car) {
          return res.status(404).send({
            message: 'Car not found',
          });
        }
        return res.status(200).send(car);
      })
      .catch((error) => res.status(400).send(error));
  },
  addCar(req, res) {
    return Car
      .create({
        registrationNo: req.body.registrationNo,
      })
      .then((car) => res.status(201).send(car))
      .catch((error) => res.status(400).send(error));
  },
  updateCarInfo(req, res) {
    return Car
      .findById(req.params.id, {
        include: [{
          model: Car,
        }, {
          model: Owner,
        }],
      })
      .then(car => {
        if(!car) {
          return res.status(404).send({
            message: 'Car with that registration number not found'
          });
        } return car
          .update({
            registrationNo: req.body.registrationNo
          })
          .then(() => res.status(200).send(car))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  removeCar(req,res) {
    return Car
      .findById(req.params.id)
      .then(car => {
        if(!car) {
          return res.status(404).send({
            message: 'Car with that registration number not found'
          })
        } return car
          .destroy()
          .then(() => res.status(204).send({
            message: 'car removed from the system'
          }))
          .catch((error) => res.status(400).send(error))
      })
  }
};
