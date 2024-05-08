import React from 'react';
import '../assets/style/login.css';

function Login() {
    return (
        <div>
            <div className="login-page">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </div>
        </div>
    )
}

export default Login;