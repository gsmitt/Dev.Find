import './styles.css';
import React, { useEffect, useState } from 'react';
import { api } from "../../services/api";

export function Dashboard() {
    let [data, setData] = useState({
        filter: "a",
        offset: 0
    });
    
    useEffect(
        async function load(e) {
            try {
                const get = (await api.get(`/post/${data.filter}/${data.offset}`)).data;
                console.log(get)
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