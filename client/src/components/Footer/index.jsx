import "./styles.css";
import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Logo } from "../Logo";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
    render() {

        function handleClick() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        return (
            <>
                <div className="footer-container">
                    <footer>
                        <li className="logo-list"><Logo cor="white" /></li>
                        <li className="footer-itens-list">
                            <Link onClick={handleClick} to="/sobre" className="a-texts">Sobre</Link><br />
                            <Link onClick={handleClick} to="/sobre" className="a-texts">Login</Link><br />
                            <Link onClick={handleClick} to="/sobre" className="a-texts">Cadastrar-se</Link><br />
                            <Link onClick={handleClick} to="/sobre" className="a-texts">Contato</Link><br />
                            <p className="a-texts">Siga-nos</p> <br />
                        </li>
                        <li className="icon-list">
                            <a href="https://github.com/gsmitt/Dev.Find" className="icon-itens"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/tech-soldiers-%E2%A0%80-15a588221/" className="icon-itens"><FaLinkedin /></a>
                            
                        </li>
                        <div className="section-container">
                            <p className="text-p">© 2021 dev.find( ) — Direitos <br/> reservados</p>
                            
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}
