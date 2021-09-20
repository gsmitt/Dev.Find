import "./styles.css";
import React from "react";
import { FaBars } from 'react-icons/fa'
import logo from "./logo.png"

export class NavBar extends React.Component {
    render() {


        return (
            <>
                <div className="nav-container">
                    <header>
                        <nav className="lista-header">
                            <li className="item-lista-header"><img className="logo" src={logo} alt="" /></li>
                            <li className="item-lista-header"><FaBars className="icon" /></li>
                        </nav>
                    </header>
                </div>
            </>
        );
    }
}

