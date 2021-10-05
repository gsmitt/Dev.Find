import './styles.css';
import React from 'react';
import { GoLocation } from 'react-icons/go';
import { BsBuilding } from 'react-icons/bs';

export function EditProfile() {
    return (
        <div className="edit-container">
            <div>
                <center>
                    <form action="">
                        <div className="input--container">
                            <label className="title--input">Nome</label>

                            <input className="input--edit" type="text" placeholder="Nome" required />
                        </div>

                        <div className="input--container">
                            <label className="title--input">E-mail</label>

                            <input className="input--edit" type="text" placeholder="E-mail" required />
                        </div>

                        <div className="input--container">
                            <label className="title--input">Bio</label>

                            <textarea placeholder="Descrição." id="" cols="30" rows="10" required></textarea>
                        </div>
                        
                        <div className="input--container">
                        <GoLocation className="edit--icons"/>
                            <input className="input--edit" type="text" placeholder="Localização" required />
                        </div>
                        <div className="input--container">

                        <BsBuilding className="edit--icons"/><input className="input--edit" type="text" placeholder="Empresa" required />
                        </div>



                        <input type="submit" value="Salvar" className="private-inp" />


                    </form>
                </center>
            </div>
        </div>
    );
}

export default EditProfile;