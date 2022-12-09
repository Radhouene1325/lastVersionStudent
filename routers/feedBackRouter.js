const feedbackController=require('../controllers/feedBackController');
const express=require('express');
const checkAuth = require('../middleware/auth');
const upload = require('../middleware/upload');

const route=express.Router();


route.delete('/delete/:id', feedbackController.deletefeedback)
route.put('/update/:id',  feedbackController.updatefeedback)
route.get('/getbyid/:id',  feedbackController.getById)
route.get('/getAll',  feedbackController.getAll)
route.get('/getMyFeedBacks/:id',  feedbackController.getMyFeedBacks)
route.get('/getSentFeedBack/:id',  feedbackController.getSentFeedBack)

route.post('/create/:id/:rate' ,  feedbackController.makeFeedBack)
route.get('/getMyFeedBacks/:id',  feedbackController.getMyFeedBacks)
route.get('/getSentFeedBack/:id',  feedbackController.getSentFeedBack)

route.post('/create/:id/:rate' ,  feedbackController.makeFeedBack)

module.exports=route;

