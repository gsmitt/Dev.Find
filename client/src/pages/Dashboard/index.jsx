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
            const get = (await api.get(`/${target}/getMany/${data.filter ? data.filter : "nullValue"}/${data.offset}`)).data;
            console.log(get)

            const container = document.querySelector(".cards-container")
            container.innerHTML = ""


            target == "post" ?
                (() => {
                    for (let i of get) {
                        let div = document.createElement("div")
                        div.classList.add("card--2")
                        let h3 = document.createElement("h3")
                        h3.classList.add("titulow")
                        h3.innerHTML = i.title


                        if (i.image) {
                            let img = document.createElement("img")
                            // div = document.querySelector("image-card")
                            img.src = i.image
                            img.classList.add("imageee-")
                            div.appendChild(img)
                        }
                        let p = document.createElement("p")
                        p.classList.add("subtituloww")
                        p.innerHTML = i.description



                        div.appendChild(h3)
                        div.appendChild(p)
                        container.appendChild(div)
                    }
                })() :
                (() => {
                    for (let i of get) {
                        let div = document.createElement("div")
                        div.classList.add("card--2")
                        let a = document.createElement("a")
                        a.innerHTML = i.name
                        a.href = "/perfil-usuario/" + i.id
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

    async function handleSelector(e) {
        const value = e.target.id
        setData(prevData => ({ ...prevData, target: value }));
        load(e.target.id)
    }

    return (
        <div className="dashboard">
            <div className="type-selector">
                <div className={`selector-element ${data.target == "post" ? "selected-element" : ""}`} onClick={handleSelector} id="post">Projetos</div>
                <div className={`selector-element ${data.target == "user" ? "selected-element" : ""}`} onClick={handleSelector} id="user">Desenvolvedores</div>
            </div>

            <form className="flex-form" onSubmit={(e) => { e.preventDefault() }}>
                <input type="search" placeholder="O que você deseja?" name="filter" onChange={handleChange} value={data.filter}>
                </input>
                <input type="submit" value="Pesquisar" onClick={(e) => { load(data.target) }}>
                </input>
            </form>
            <div className="cards-container"></div>
        </div>
    );
}

export default Dashboard;