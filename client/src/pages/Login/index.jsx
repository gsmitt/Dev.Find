import './styles.css';
import React from 'react';

export function Login() {
    return (
        <div className="holder">
            <div className="parent">
               <center>
               <form action="">
                        <input className="input--login" type="email" placeholder="E-mail" required/>
                    <div>
                        <input className="input--login2" type="password" placeholder="Senha" required/>
                    </div>
                    <input type="submit" value="Entrar" class="private-inp"/>
                    <p className="text--baixo">
                    Não é membro?
                    <a href="/cadastro" className="link--text"> Cadastre-se</a>
                </p>
                </form>
               </center>
            </div>
        </div>
    );
}

export default Login;