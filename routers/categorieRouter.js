
const categorieController=require('../controllers/categorieController');
const express=require('express');
const route=express.Router();


route.post('/create',categorieController.createCategorie);
route.delete('/deletebyid/:id',categorieController.deleteCategorie);
route.put('/updatebyid/:id',categorieController.updateCategorie);
route.get('/getAll',categorieController.getAllCategorie);
route.get('/getonebyid/:id',categorieController.getCategorieById);

module.exports=route;
