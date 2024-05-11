import React from 'react';
import '../assets/style/login.css';

function Login() {
    return (
        <div>
            <div className="login-page">
                <h1>Connexion</h1>
                <form className='login-page-form'>
                    <input className='login-page-form-input-text' type="text" placeholder="Email" />
                    <input className='login-page-form-input-password' type="password" placeholder="Password" />
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