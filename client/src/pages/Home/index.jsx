import "./styles.css";
import React from "react";
import "../Home/logo.png";

export class Home extends React.Component {
    render() {
       

        return (
            <>
                <div className="geral">
                <header>
                    <nav className="lista-header">
                        <li className="item-lista-header"><img className="logo" src="https://senacsc754-my.sharepoint.com/personal/jesse_serpa_alunos_sc_senac_br/Documents/Arquivos%20de%20Chat%20do%20Microsoft%20Teams/logo-dev-removebg-preview.png" alt=""/></li>
                        <li className="item-lista-header"><a href="#"className="texto-home">Login</a></li>
                        <li className="item-lista-header"><a href="#" className="texto-home">Cadastro</a></li>
                        
                    </nav>
                </header>
                </div>        
                        
            </>
        );
    }
}

