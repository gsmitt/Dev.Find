import './styles.css';
import authServices from "../../services/authServices";
import React, { useState } from 'react';

export function Login() {
    let [data, setData] = useState({
        credential: "",
        password: ""
    });
    
    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await authServices.signIn(data.credential.toLocaleLowerCase(), data.password);            
            window.location.replace("../");
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="holder">
            <div className="parent">
               <center>
               <form className="login-container" action="" onSubmit={handleSubmit}>
                        <input className="input--login" type="username" placeholder="E-mail/Apelido" name="credential" value={data.credential} onChange={handleChange} required/>
                    <div>
                        <input className="input--login2" type="password" placeholder="Senha" name="password" value={data.password} onChange={handleChange} required/>
                    </div>
                    <input type="submit" value="Entrar" className="private-inp"/>
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