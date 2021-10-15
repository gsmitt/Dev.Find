import "./styles.css";
import React, { useState } from "react";
import { VscClose } from 'react-icons/vsc';
import { FaChevronRight } from "react-icons/fa";
import { api } from "../../services/api";
import authServices from "../../services/authServices";

export function EditarPerfil() {
  let [data, setData] = useState({
    isModalOpen: false,
    name: "",
    password: "",
    description: "",
    telephone: "",
    company: "",
    location: "",
    avatar: "",
    background: ""
  })

  async function handleSubmit(e) {
    e.preventDefault();
    const body = new FormData()
    
    for (let i in data){
      if (i != 'isModalOpen'){
        if (data[i] != ""){
          body.append(i, data[i])
        }
      }
    }

    body.append('headers', {"Content-Type": "multipart/form-data"})
    try {
      const edit = (await api.put(`/user/${authServices.getIdFromAccessToken(localStorage.getItem("access-token"))}`, body)).data;
      closeModal()
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }


  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleImage(e) {
    setData(
        prevData => ({ ...prevData, [e.target.name]: e.target.files[0]})
    )
  }

  function openModal() {
    setData(prevData => ({ ...prevData, isModalOpen: true }))
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    let body = document.querySelector("body")
    body.style.overflow = "hidden"
  }

  function closeModal() {
    setData(prevData => ({ ...prevData, isModalOpen: false }))
    let body = document.querySelector("body")
    body.style.overflow = "unset"
  }

  return (
    <div className="all">
      <button className="modal--button" onClick={openModal}>Editar Perfil</button>
      <Modal isOpen={data.isModalOpen} onClose={closeModal}>
        <header className="container--header">
          <div className="logo-container">
            <FaChevronRight color="#ff9900" fontSize="inherit" />
            <span className="logo-dev">dev.</span>
            <span className="logo-find">find(</span>
            <span className="logo-par">)</span>
          </div>
          <VscClose onClick={closeModal} className="icon--modal" />
          <div className="header--title"><h1>Editar Perfil</h1></div>
        </header>
        <div className="holder-2">
          <div className="parent-2">
            <center>
              <form onSubmit={handleSubmit} className="form--modal" action="">
                <div className="input-container">
                  <label id="special"  className="title-input">Nome</label>
                  <input className="input--cadastro"  type="text" placeholder="Nome" name="name" onChange={handleChange} value={data.name} />
                </div>

                <div className="input-container">
                  <label className="title-input">Senha</label>
                  <input className="input--cadastro" type="text" placeholder="Senha" name="password" onChange={handleChange} value={data.password} />
                </div>

                <div className="input-container">
                  <label className="title-input">Descrição</label>
                  <textarea placeholder="Descreva." id="" cols="30" rows="10" name="description" onChange={handleChange} value={data.description} />
                </div>

                <div className="input-container">
                  <label className="title-input">Empresa</label>
                  <input className="input--cadastro3" type="text" placeholder="Empresa" name="company" onChange={handleChange} value={data.company} />
                </div>

                <div className="input-container">
                  <label className="title-input">Localização</label>
                  <input className="input--cadastro3" type="text" placeholder="Localização" name="location" onChange={handleChange} value={data.location} />
                </div>

                <div className="input-container">
                  <label className="title-input">Número/Telefone</label>
                  <input className="input--cadastro3" type="tel" placeholder="Número" name="telephone"  minlength="11" maxlength="11" onChange={handleChange} value={data.telephone} />
                </div>

                <div className="input-container">
                  <label className="title-input">Avatar</label>
                  <input  className="avatar--input" type="file" name="avatar" onChange={handleImage} accept="image/png, image/jpeg, image/gif"/>
                </div>
                <div className="input-container">
                  <label className="title-input">Plano de Fundo</label>
                  <input className="bg--container" type="file" name="background" onChange={handleImage} accept="image/png, image/jpeg, image/gif"/>
                </div>
                <div className="save--container">
                  <input type="submit" value="Salvar" className="private-inp" />
                </div>
              </form>
            </center>
          </div>
        </div>
      </Modal>
    </div>
  )
}

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false)
      return null

    return (
      <div>
        <div className="modal">
          {this.props.children}
        </div>
        <div className="bg" onClick={e => this.close(e)} />
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

