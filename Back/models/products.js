const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        required: true,
    }, // Nine or like nex or good or worn
    carbonFootPrint : {
        type: Number,
        required: false,
    }, // may be optional
    size : {
        type: String,
        required: true,
    },
    color : {
        type: String,
        required: true,
    },
    thriftShop : {
        type: String,
        required: true,
    },
    material : {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;