const userController = require('../controllers/userController');
const express = require('express')
const route = express.Router();
const sendMail = require('../middleware/sendMail');
const jwt=require('jsonwebtoken')
const passport=require('passport');
const upload = require('../middleware/upload');
require('../passportConfig')
// const LocalStrategy = require('passport-local').Strategy;
// var JwtStrategy = require('passport-jwt').Strategy;

route.post('/login', passport.authenticate('local', { session: false }),userController.login)
route.get('/authenticated', passport.authenticate('jwt', { session: false }),userController.authenticated)
route.get('/logout', passport.authenticate('jwt', { session: false }),userController.logout)
route.get('/getAll', passport.authenticate('jwt', { session: false }),userController.getAllUser)
route.get('/getbyid:id', passport.authenticate('jwt', { session: false }),userController.getUserById)
route.delete('/delete/:id', passport.authenticate('jwt', { session: false }), userController.deleteUserById)
route.put('/update/:id', passport.authenticate('jwt', { session: false }),userController.updateUserById)
route.put('/avatar/:id', upload.single("avatar") , passport.authenticate('jwt', { session: false }),userController.uploadAvatar);
route.get('/userbyrole/:role', passport.authenticate('jwt', { session: false }),userController.getUserByrole);
route.get('/activate/:token',  passport.authenticate('jwt', { session: false }), userController.activateAcount)
route.post('/forgetpassword',   passport.authenticate('jwt', { session: false }),userController.forgetPassword, sendMail)
route.post('/resetpassword/:token',  passport.authenticate('jwt', { session: false }), userController.resetpassword)
route.get('/topUser', passport.authenticate('jwt', { session: false }),userController.topUser)
module.exports = route;
