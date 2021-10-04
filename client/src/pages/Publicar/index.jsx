import './styles.css';
import React from 'react';

export function Publicar() {
    return (
        <div className="holder">
            <div className="parent">
                <center>
                    <form action="">
                        <div className="input-container">
                            <label className="title-input">Coloque um nome para o seu projeto</label>
                            
                            <input className="input--cadastro3" type="text" placeholder="Nome do seu Projeto" required />
                        </div>

                        <div className="input-container">
                            <label className="title-input">Descreva sobre o seu projeto.</label>
                            
                            <textarea placeholder="Descreva." id="" cols="30" rows="10" required></textarea>
                        </div>



                        <input type="submit" value="Publicar" className="private-inp" />

                      
                    </form>
                </center>
            </div>
        </div>
    );
}

export default Publicar;