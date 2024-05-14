import React, { useState } from 'react';
import axios from 'axios';
import '../assets/style/register.css';  // Ensure your styles are appropriately defined
import { useNavigate } from 'react-router-dom';

function Register() {
const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
});

const navigate = useNavigate();

// Handles form input changes
const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
};

// Handles form submission
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // POST request to your server endpoint
        const response = await axios.post('http://localhost:5000/users/addUser', formData);
        console.log(response.data);  // handle response appropriately
        navigate('/');
        alert('Registration successful');
        
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert('Failed to register: ' + error.response.data.message);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            alert('Failed to register: No response from the server.');
        } else {
            // Something happened in setting up the request that triggered an error
            alert('Failed to register: ' + error.message);
        }
    }
};

return (
    <div className="register-page">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <input 
                className="form-input-text"
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input 
                className="form-input-text"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <input 
                className="form-input-text"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input 
                className="form-input-password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button className="form-btn-submit" type="submit">Create Account</button>
        </form>
        <p>
            Already have an account? <a href="/login">Log in</a>
        </p>
    </div>
);
}

export default Register;
