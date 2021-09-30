import './styles.css';
import { api } from "../../services/api";
import React, { useState } from 'react';

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
        try {
            const user = (await api.post("/user/", {
                name: data.name,
                username: data.username.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password,
                role: data.isdev? "dev" : "client"
            })).data;
            window.location.replace("../")
        } catch (err) {
            console.log(err);
        }
    }

    async function verifyPassword(e){
        if(!(data.password === data.confpass)){
            return alert("As senhas digitadas não coincidem")
        } 
        handleSubmit(e)
    }

    return (
        <div className="holder">
            <div className="parent">
                <center>
                    <form onSubmit={verifyPassword} action="">
                        <input className="input--cadastro3" type="text" name="username" placeholder="Apelido do Usuário" value={data.username} onChange={handleChange} required />
                        <br />
                        <input className="input--cadastro" type="email" name="email" placeholder="E-mail" value={data.email} onChange={handleChange} required />
                        <br/>
                        <input className="input--cadastro" type="text" name="name" placeholder="Nome do Usuário" value={data.name} onChange={handleChange} required />
                        <div>
                            <input className="input--cadastro2" type="password" name="password" placeholder="Senha" value={data.password} onChange={handleChange} required />
                        </div>

                        <input className="input--cadastro2" type="password" name="confpass" placeholder="Confirmar senha" value={data.confpass} onChange={handleChange} required />
                        
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
        </div>
    );
}

export default Cadastro;