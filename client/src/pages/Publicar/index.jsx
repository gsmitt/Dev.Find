import React, { useState } from 'react';
import './styles.css';
import { Redirect } from "react-router-dom";
import authServices from "../../services/authServices";
import { api } from "../../services/api";

export function Publicar() {
    let [data, setData] = useState({
        name: "",
        description: ""
    });
    const accessToken = authServices.getAccessToken();
    if (!accessToken) {
        return <Redirect to="/login"/>
    }

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const post = (await api.post("/post/", {
                description: data.description,
                title: data.name
            })).data;

            window.location.replace("../")
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="holder">
            <div className="parent">
                <center>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label className="title-input">Coloque um nome para o seu projeto</label>
                            
                            <input className="input--cadastro3" type="text" placeholder="Nome do seu Projeto" name="name" value={data.name} onChange={handleChange} required />
                        </div>

                        <div className="input-container">
                            <label className="title-input">Descreva sobre o seu projeto.</label>
                            
                            <textarea placeholder="Descreva." id="" cols="30" rows="10" name="description" value={data.description} onChange={handleChange} required></textarea>
                        </div>

                        <input type="submit" value="Publicar" className="private-inp" />
                    </form>
                </center>
            </div>
        </div>
    );
}

export default Publicar;