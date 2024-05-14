const express = require('express'); 
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

const app = express(); 
const port = process.env.PORT; 

app.use(cors(corsOptions));
app.use(express.json());
app.use('/users', routes.usersRoutes);
app.use('/products', routes.productsRoutes);

mongoose
    .connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
