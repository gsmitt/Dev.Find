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

                const container = document.querySelector(".dashboard")
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
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;