
const postController=require('../controllers/postController');
const express=require('express');
const upload = require('../middleware/upload');
const route=express.Router();


route.put('/like/:id', postController.like)
route.put('/dislike/:id', postController.dislike)
route.get('/posts' , postController.getOwnPosts)
route.delete('/delete/:id', postController.deletepost)
route.put('/update/:id', postController.updatePost)
route.get('/getbyid/:id', postController.getById)
route.get('/getAll', postController.getAll)
route.post('/create' , postController.create)

module.exports=route;
