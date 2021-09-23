import './styles.css';
import React from 'react';

export function Login() {
    return (
        <div className="holder">
            <div className="parent">
                <h3>Sign Up</h3>
                <form action="">
                    <div>
                        <input type="text" placeholder="Usuário" required />
                        <span class="border"></span>
                    </div>
                    <div>
                        <input type="email" placeholder="E-mail" required/>
                        <span class="border"></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;