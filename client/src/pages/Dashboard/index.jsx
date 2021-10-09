import './styles.css';
import React, { useEffect, useState } from 'react';
import { api } from "../../services/api";
import { Link } from 'react-router-dom'

export function Dashboard() {
    let [data, setData] = useState({
        filter: "",
        offset: 0
    });

    
    useEffect(
        async function load(e) {
            try {
                const get = (await api.get(`/post/${data.filter? data.filter : "nullValue"}/${data.offset}`)).data;
                console.log(get)

                const container = document.querySelector(".placeholder")
                container.innerHTML=""
                for (let i of get) {
                    let div = document.createElement("div")
                    div.classList.add("card")
                    div.innerHTML= i.title
                    container.appendChild(div)
                }
                
            } catch (err) {
                console.log(err);
            }
        }
    )

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }


    return (
        <div className="dashboard">
            <input type="text" name="filter" onChange={handleChange} value={data.filter} />
            <div className="placeholder">

            </div>
        </div>
    );
}

export default Dashboard;