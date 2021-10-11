import "./styles.css";
import React from "react";
import { VscClose } from 'react-icons/vsc';

export class EditarPerfil extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div className="all">
        <button className="modal--button" onClick={() => this.openModal()}>Editar Perfil</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <header className="container--header">
            <VscClose onClick={() => this.closeModal()} className="icon--modal" />
            <div className="header--title"><h1>Editar Perfil</h1></div>
          </header>
          <div className="holder-2">
            <div className="parent-2">
              <center>
                <form action="">
                  <div className="input-container">
                    <label className="title-input">Nome</label>
                    <input className="input--cadastro" type="text" placeholder="Nome" name="name" />
                  </div>

                  <div className="input-container">
                    <label className="title-input">E-mail</label>
                    <input className="input--cadastro" type="text" placeholder="E-mail" name="name" />
                  </div>

                  <div className="input-container">
                    <label className="title-input">Descrição</label>
                    <textarea placeholder="Descreva." id="" cols="30" rows="10" name="description"></textarea>
                  </div>

                  <div className="input-container">
                    <label className="title-input">Empresa</label>
                    <input className="input--cadastro3" type="text" placeholder="Empresa" name="name" />
                  </div>

                  <div className="input-container">
                    <label className="title-input">Localização</label>
                    <input className="input--cadastro3" type="text" placeholder="Localização" name="name" />
                  </div>
                  <input type="submit" value="Salvar" className="private-inp" />
                </form>
              </center>
            </div>
          </div>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
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
