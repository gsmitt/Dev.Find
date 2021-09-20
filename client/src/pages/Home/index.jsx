import "./styles.css";
import React from "react";

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
</style>

export class Home extends React.Component {
    render() {


        return (
            <>
                <div className="container">
                    <li className="body-list">
                    <p className="text-list">
                        precisando de <br />
                        desenvolvedores? <br />
                        aqui você encontra!
                    </p>
                    </li>
                   <center>
                   <button className="botao-contratar"><p className="texto-botao-contratar">Contratar</p></button>
                    <br/>
                    <button className="botao-seja-um"><p className="texto-botao-seja-um">Seja um desenvolvedor</p></button>
                   </center>
                </div>

            </>
        );
    }
}

