import './styles.css';
import { ImLinkedin2 } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import React from 'react';

export function CardDashboard() {
    return (
                <div className="cards">
                    <div class="card">
                        <div class="img-bx">
                            <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
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
                            <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
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
                            <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
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
                            <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
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
    );
}

export default CardDashboard;