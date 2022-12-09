
const annonceController=require('../controllers/annoncesController');
const express=require('express');
const route=express.Router();

route.post('/create',annonceController.createAnnonce);
route.delete('/delete/:id',annonceController.deleteAnnonce);
route.put('/update/:id',annonceController.updateAnnonce);
route.get('/getAll',annonceController.getAllAnnonce);
route.get('/getone/:id',annonceController.getAnnonceById);
route.get('/getByUserId/:id',annonceController.getAnnonceByUserId);
route.get('/search',annonceController.Searchannonce)

module.exports=route;
