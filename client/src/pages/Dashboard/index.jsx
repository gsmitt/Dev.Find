import './styles.css';
import React, { useEffect, useState } from 'react';
import { api } from "../../services/api";
import { Link } from 'react-router-dom'

export function Dashboard() {
    let [data, setData] = useState({
        filter: "",
        offset: 0,
        target: ""
    });

    async function load(target) {
        try {
            const get = (await api.get(`/${target}/getMany/${data.filter? data.filter : "nullValue"}/${data.offset}`)).data;
            console.log(get)

            const container = document.querySelector(".placeholder")
            container.innerHTML=""
            
            target == "post" ?
            (() => {
                for (let i of get) {
                    let div = document.createElement("div")
                    div.classList.add("card")
                    div.innerHTML= i.title

                    
                    if(i.image){let img = document.createElement("img")
                    img.src = i.image
                    div.appendChild(img)
                    }

                    container.appendChild(div)
                }
            })() :
            (() => {
                for (let i of get) {
                    let div = document.createElement("div")
                    div.classList.add("card")
                    let a = document.createElement("a")
                    a.innerHTML = i.name
                    a.href = "/perfil-usuario/"+i.id
                    div.appendChild(a)
                    container.appendChild(div)
                }
            })()

            
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    async function handleSelector (e){
        const value = e.target.id
        setData(prevData => ({ ...prevData, target: value }));
        load(e.target.id)
    }

    return (
        <div className="dashboard">
            <div className="type-selector">
                <div className={`selector-element ${data.target=="post"?"selected-element":""}`} onClick={handleSelector} id="post">Projetos</div>
                <div className={`selector-element ${data.target=="user"?"selected-element":""}`} onClick={handleSelector} id="user">Desenvolvedores</div>
            </div>
            <input type="text" name="filter" onChange={handleChange} value={data.filter} />
            <button onClick={()=>{load(data.target)}}>Pesquisar</button>
            <div className="placeholder">

            </div>
        </div>
    );
}

export default Dashboard;