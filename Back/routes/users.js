const userController = require('../controllers/users');
const Router = require('express').Router();
const auth = require('../middleware/authenticateToken');

//users routes

Router.post('/addUser', userController.createUser);
Router.post('/login',auth , userController.loginUser);
Router.get('/getUser/:id',auth , userController.getUser);
Router.put('/updateUser/:id',auth , userController.updateUser);
Router.delete('/deleteUser/:id',auth , userController.deleteUser);


module.exports = Router;