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
                            <a href="/sobre" className="a-texts">Sobre</a> <br />
                            <a href="/login" className="a-texts">Login</a> <br />
                            <a href="/cadastro" className="a-texts">Cadastra-se</a> <br />
                            <a href="/contato" className="a-texts">Contato</a> <br />
                            <p className="a-texts">Siga-nos</p> <br /> 
                        </li>
                        <li className="icon-list">
                            <a href="https://github.com/gsmitt/Dev.Find"  className="icon-itens"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/tech-soldiers-%E2%A0%80-15a588221/" className="icon-itens"><FaLinkedin /></a>
                            <hr className="line"></hr>
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
