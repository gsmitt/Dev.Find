import './styles.css';
import { ImLinkedin2 } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import React from 'react';

export function Sobre() {
    return (
        <div className="sobre">
            <div className="text">
                <p className="text-sobre">A <strong>dev.find( )</strong> foi um projeto criado dentro do programa ENTRA21
            com o objetivo de ser o projeto final do curso, coordenado pelo professor
            William Círico. Para a sua execução, tivemos a ideia de fazer um site de "freelance"
            especialmente para programadores afim de facilitar a comunicação entre os "devs"
            e as pessoas que necessitam dos seus serviços.

            </p>
                <p className="text-sobre-2">
                    Desenvolvido pela equipe <strong>TechSoldiers</strong>
                </p>
                <div className="image-box">
                    <img className="image" src="https://uploaddeimagens.com.br/images/003/464/939/original/MicrosoftTeams-image_%281%29.png?1633372670" alt="aaaaaaaaaaaaaaaaaaaa" />
                </div>
            </div>
            <center>
                <div className="title">Integrantes</div>
                <div className="cards">
                    <div class="card">
                        <div class="img-bx">
                            <img src="https://uploaddeimagens.com.br/images/003/491/427/full/gustavo.jpg?1634609242" alt="img" />
                        </div>
                        <div class="content">
                            <div class="detail">
                                <h2>Gustavo Adriel Mittelmann<br /><span>Back-End</span></h2>
                                <ul class="sci">
                                    <li>
                                        <a href="#"><ImLinkedin2 /></a>
                                    </li>
                                    <li>
                                        <a href="#"><AiFillGithub /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-bx">
                            <img src="https://uploaddeimagens.com.br/images/003/491/426/full/jesse.jpg?1634609159" alt="img" />
                        </div>
                        <div class="content">
                            <div class="detail">
                                <h2>Jessé Antônio Effting Serpa<br /><span>Front-End</span></h2>
                                <ul class="sci">
                                    <li>
                                        <a href="https://www.linkedin.com/in/jess%C3%A9-ant%C3%B4nio-773a79217/" target="_blank"><ImLinkedin2 /></a>
                                    </li>
                                    <li>
                                        <a href="#"><AiFillGithub /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-bx">
                            <img src="https://uploaddeimagens.com.br/images/003/491/432/full/jaion.jpg?1634609415" alt="img" />
                        </div>
                        <div class="content">
                            <div class="detail">
                                <h2>João Victor C. Bortolanza<br /><span>Front-End</span></h2>
                                <ul class="sci">
                                    <li>
                                        <a href="#"><ImLinkedin2 /></a>
                                    </li>
                                    <li>
                                        <a href="#"><AiFillGithub /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-bx">
                            <img src="https://uploaddeimagens.com.br/images/003/491/433/full/marcio.jpg?1634609441" alt="img" />
                        </div>
                        <div class="content">
                            <div class="detail">
                                <h2>Marcio Kaua <br /> Ferreira<br /><span>Back-End</span></h2>
                                <ul class="sci">
                                    <li>
                                        <a href="#"><ImLinkedin2 /></a>
                                    </li>
                                    <li>
                                        <a href="#"><AiFillGithub /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-bx">
                            <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
                        </div>
                        <div class="content">
                            <div class="detail">
                                <h2>Marcos Paulo <br /> da Silva<br /><span>Front-End</span></h2>
                                <ul class="sci">
                                    <li>
                                        <a href="#"><ImLinkedin2 /></a>
                                    </li>
                                    <li>
                                        <a href="#"><AiFillGithub /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Sobre;