
const adminController=require('../controllers/adminController');
const express=require('express');
const route=express.Router();

route.post('/register',adminController.register);

module.exports=route;
