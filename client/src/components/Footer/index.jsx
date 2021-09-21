import "./styles.css";
import React from "react";
import logo from "./logo.png"

export class Footer extends React.Component {
    render() {


        return (
            <>
                <div className="footer-container">
                    <footer>
                        <li className="logo-list"><img className="logo-1" src={logo} alt="" /></li>
                        <li className="footer-itens-list">
                            <a className="a-texts">Sobre</a>
                            <a className="a-texts">login</a>
                            <a className="a-texts">cadastra-se</a>
                            <a className="a-texts">contato</a>
                            <a className="a-texts">Siga-nos</a>
                        </li>
                        <section className="section-container">
                            <p className="text-p">© 2021 dev.find( ) — Direitos
                                7reservados</p>
                        </section>
                    </footer>
                </div>
            </>
        );
    }
}
