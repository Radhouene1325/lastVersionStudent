
const advertiserController= require('../controllers/advertiserController');
const express=require('express');
const route=express.Router();

route.post('/',advertiserController.register);

module.exports=route;
