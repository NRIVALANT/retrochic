const User = require('../models/users');
const bcrypt = require('bcrypt');
const { json } = require('express');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        const newUser = new User({ name, lastName, email, password });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        res.json({ token });
        console.log(json({ token }));
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User
            .findOne({ email })
            .select('+password');
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User
            .findById(req.user.id)
            .select('-password');
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User
            .findByIdAndUpdate(req.user.id
                , req.body
                , { new: true });
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.json({ message: 'User deleted' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
// Path: Back/controllers/products.js