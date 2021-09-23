import "./styles.css";
import React from "react";

export class EditProfile extends React.Component {
    render() {
        return (
            <>
                <div className="container--geral">
                    <div className="container--box" />
                    <div className="text--box" />
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Nome" />
                </div>
            </>
        ); 
    }
}
