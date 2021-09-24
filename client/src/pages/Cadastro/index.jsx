import './styles.css';
import React from 'react';

export function Cadastro() {
    return (
        <div className="holder">
            <div className="parent">
                <center>
                    <form action="">
                        <input className="input--cadastro3" type="text" placeholder="Nome do Usuário" required />
                        <br />
                        <input className="input--cadastro" type="email" placeholder="E-mail" required />

                        <div>
                            <input className="input--cadastro2" type="password" placeholder="Senha" required />
                        </div>
                        <input className="input--cadastro2" type="password" placeholder="Confirmar senha" required />
                        <div className="checkbox">
                            <input className="check-box-feature" id="checkbox" type="checkbox" placeholder="Confirmar senha" required />
                            <label for="checkbox">Quero ser desenvolvedor</label>
                        </div>
                        <input type="submit" value="Cadastrar-se" class="private-inp" />

                        <p className="text--baixo">
                            Já é membro?
                            <a href="/login" className="link--text"> Entrar</a>
                        </p>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default Cadastro;