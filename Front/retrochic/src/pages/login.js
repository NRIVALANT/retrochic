import React, { useState} from 'react';
import '../assets/style/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setCurrentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users/login', { email, password });
            const user = response.data.user; 
            localStorage.setItem('token', response.data.token); 
            setCurrentUser(user);  
            navigate('/');   
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            alert('Login failed: Incorrect email or password');
        }
    };
    return (
        <div>
            <div className="login-page">
                <h1>Connexion</h1>
                <form className='login-page-form' onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input className='login-page-form-input-text' type="email"id = "email" value = {email} onChange = {e => setEmail(e.target.value)} required placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input className='login-page-form-input-password' type="password" id='password' value={password} onChange={(e => setPassword(e.target.value))} required placeholder="Password" />
                    <button className='login-page-form-btn-submit' type="submit">Se connecter</button>
                </form>
                <p>
                    Vous n'avez pas de compte ? <a href="/register">S'enregistrer</a>
                </p>
            </div>
        </div>
    )
}

export default Login;