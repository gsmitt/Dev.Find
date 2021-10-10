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

    async function load(e) {
        try {
            const get = (await api.get(`/getMany/${data.target}/${data.filter? data.filter : "nullValue"}/${data.offset}`)).data;
            console.log(get)

            const container = document.querySelector(".placeholder")
            container.innerHTML=""
            
            data.target == "post" ?
            (() => {
                for (let i of get) {
                    let div = document.createElement("div")
                    div.classList.add("card")
                    div.innerHTML= i.title
                    container.appendChild(div)
                }
            })() :
            (() => {
                for (let i of get) {
                    let div = document.createElement("div")
                    div.classList.add("card")
                    div.innerHTML= i.name
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

    const handleSelector = e => {
        // essa parte não funciona direito, tentar useStateWhithPromisses
        const value = e.target.id;
        setData(prevData => ({ ...prevData, target: value }));
        load()
    }

    return (
        <div className="dashboard">
            <div className="type-selector">
                <div className={`selector-element ${data.target=="post"?"selected-element":""}`} onClick={handleSelector} id="post">Projetos</div>
                <div className={`selector-element ${data.target=="dev"?"selected-element":""}`} onClick={handleSelector} id="dev">Desenvolvedores</div>
            </div>
            <input type="text" name="filter" onChange={handleChange} value={data.filter} />
            <div className="placeholder">

            </div>
        </div>
    );
}

export default Dashboard;