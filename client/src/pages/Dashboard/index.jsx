import './styles.css';
import React from 'react';
import { CardDashboard } from "../../components/CardDashboard"

export function Dashboard() {
    return (
        <div className="dashboard">
            <CardDashboard/>
        </div>
    );
}

export default Dashboard;