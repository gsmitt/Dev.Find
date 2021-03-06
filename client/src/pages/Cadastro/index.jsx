import './styles.css';
import { api } from "../../services/api";
import React, { useState } from 'react';
import validator from 'validator';

export function Cadastro() {
    let [data, setData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confpass: "",
        isdev: false
    });

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if(verifyEmail() && verifyPassword() && isStrongPassword()){
            try {
                const user = (await api.post("/user/", {
                    name: data.name,
                    username: data.username.toLowerCase(),
                    email: data.email.toLowerCase(),
                    password: data.password,
                    role: data.isdev ? "dev" : "client"
                })).data;
                window.location.replace("/")
            } catch (err) {
                console.log(err);
            }
        }

    }

    function verifyPassword() {
        if (!(data.password === data.confpass)) {
             alert("As senhas digitadas não coincidem")
             return false
        }
        return true
    }

    function verifyEmail() {
        if ((validator.isEmail(data.email) === false)) {
             alert("E-mail não é válido!")
             return false
        }
        return true
    }

     function isStrongPassword() {
        if ((validator.isStrongPassword(data.password) === false)) {
            alert("Senha fraca!")
            return false
        }
        return true
    }

    return (
        <div className="holder">

            <center>
                <form onSubmit={handleSubmit} action="" className="form">
                    <input className="input--cadastro" type="text" name="username" placeholder="Apelido do Usuário" value={data.username} onChange={handleChange} required />

                    <input className="input--cadastro" type="email" name="email" placeholder="E-mail" value={data.email} onChange={handleChange} required />
        
                    <input className="input--cadastro" type="text" name="name" placeholder="Nome do Usuário" value={data.name} onChange={handleChange} required />

                    <input className="input--cadastro" type="password" name="password" placeholder="Senha" value={data.password} onChange={handleChange} required />

                    <input className="input--cadastro" type="password" name="confpass" placeholder="Confirmar senha" value={data.confpass} onChange={handleChange} required />

                    <div className="checkbox">
                        <input className="check-box-feature" id="checkbox" type="checkbox" checked={data.isdev} onChange={() => setData(prevData => ({ ...prevData, isdev: !prevData.isdev }))} />
                        <label htmlFor="checkbox">Quero ser desenvolvedor</label>
                    </div>

                    <input type="submit" value="Cadastrar-se" className="private-inp" />

                    <p className="text--baixo">
                        Já é membro?
                            <a href="/login" className="link--text"> Entrar</a>
                    </p>
                </form>
            </center>

        </div>
    );
}

export default Cadastro;