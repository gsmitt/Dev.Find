import "./styles.css";
import React from "react";
import logo from "./logo.png"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Logo } from "../Logo";

export class Footer extends React.Component {
    render() {


        return (
            <>
                <div className="footer-container">
                    <footer>
                        <li className="logo-list"><Logo cor="white"/></li>
                        <li className="footer-itens-list">
                            <a href="#" className="a-texts">Sobre</a> <br />
                            <a href="#" className="a-texts">login</a> <br />
                            <a href="#" className="a-texts">cadastra-se</a> <br />
                            <a href="#" className="a-texts">contato</a> <br />
                            <a href="#" className="a-texts">Siga-nos</a> <br /> <br />
                        </li>
                        <li className="icon-list">
                            <a href="#" className="icon-itens"><FaGithub /></a>
                            <a href="#" className="icon-itens"><FaLinkedin /></a>
                        </li>
                        <section className="section-container">
                            <p className="text-p">© 2021 dev.find( ) — Direitos</p>
                            <p className="text-p2">reservados</p>
                        </section>
                    </footer>
                </div>
            </>
        );
    }
}
