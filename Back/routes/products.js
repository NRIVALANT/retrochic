const Router = require('express').Router();
const productController = require('../controllers/products');

//products routes

Router.post('/addProduct', productController.createProduct);
Router.get('/getProduct/:id', productController.getProduct);
Router.put('/updateProduct/:id', productController.updateProduct);
Router.delete('/deleteProduct/:id', productController.deleteProduct);


module.exports = Router;