
const CommentaireController = require('../controllers/commentaireController.js');
const express = require('express');
const route = express.Router();


route.post('/create', CommentaireController.create);

route.post('/createinside', CommentaireController.repondre);


route.delete('/deletebyid/:id', CommentaireController.deleteCommentaireById);
route.put('/updatebyid/:id', CommentaireController.updateCommentaireById);
route.get('/getAll', CommentaireController.getAllCommentaire);
route.get('/getonebyid/:id',CommentaireController.getCommentaireById);

module.exports = route;
