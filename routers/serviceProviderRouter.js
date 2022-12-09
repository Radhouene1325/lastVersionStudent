
const serviceProviderController=require('../controllers/serviceProviderController');
const express=require('express');
const route=express.Router();


route.post('/register',serviceProviderController.register);
route.delete('/deletebyid/:id',serviceProviderController.deleteServiceById);
route.put('/updatebyid/:id',serviceProviderController.updateServiceById);
route.get('/getAll',serviceProviderController.getAllService);
route.get('/getonebyid/:id',serviceProviderController.getServiceById);

module.exports=route;
