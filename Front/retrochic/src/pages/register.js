import React from "react";
import '../assets/style/register.css'

function Register() {
    return (<>
        <div className="register-page">
            <h1>Se créer un compte</h1>
            <form className='register-page-form'>
                <input className='register-page-form-input-text' type="text" placeholder="Email" />
                <input className='register-page-form-input-password' type="password" placeholder="Password" />
                <input className='register-page-form-input-password' type="password" placeholder="RePassword" />
                <button className='register-page-form-btn-submit' type="submit">Créer son compte</button>
            </form>
            <p>
                Vous-avez un compte. <a href="/login">Se connecter</a>
            </p>
        </div>
    </>)
}

export default Register;