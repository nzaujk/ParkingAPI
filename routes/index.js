const express = require('express');
const router = express.Router();

const carController = require('../controllers/car');
const ownerController = require('../controllers/owner');
const parkingController = require('../controllers/parkingspace');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Parking Api' });
});
// car router
router.get('/parking-api/car', carController.listCars);
router.get('/parking-api/car/:id', carController.getCarById);
router.post('/parking-api/car', carController.addCar);
router.put('/parking-api/car/:id', carController.updateCarInfo);
router.delete('/parking-api/car:id', carController.removeCar);

// owner router
router.get('/parking-api/owner', ownerController.listAllOwners);
router.get('/parking-api/owner/:id', ownerController.getSingleOwner);
router.post('/parking-api/owner/', ownerController.addOwner);
router.put('/parking-api/owner/:id', ownerController.updateOwnerInfo);
router.get('/parking-api/owner/:id', ownerController.removeOwner);

// parking router
router.get('/parking-api/space', parkingController.listAll);
router.get('/parking-api/space/:id', parkingController.getSingle);









module.exports = router;
