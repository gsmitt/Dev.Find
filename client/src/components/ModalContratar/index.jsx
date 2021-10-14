// import "./styles.css";
// import React, { useState } from "react";
// import { VscClose } from 'react-icons/vsc';
// import { FaChevronRight } from "react-icons/fa";
// import { api, cancelTokenSource } from "../../services/api";
// import authServices from "../../services/authServices";

// export function ModalContratar() {
//   let [data, setData] = useState({
//     isModalOpen: false,
//     name: "",
//     password: "",
//     description: "",
//     telephone: "",
//     company: "",
//     location: "",
//     avatar: "",
//     background: ""
//   })

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const body = new FormData()
    
//     for (let i in data){
//       if (i != 'isModalOpen'){
//         if (data[i] != ""){
//           body.append(i, data[i])
//         }
//       }
//     }

//     body.append('headers', {"Content-Type": "multipart/form-data"})
//     try {
//       const edit = (await api.put(`/user/${authServices.getIdFromAccessToken(localStorage.getItem("access-token"))}`, body)).data;
//       window.location.reload()
//     } catch (err) {
//       console.log(err);
//     }
//   }


//   function handleChange(e) {
//     const value = e.target.value;
//     const name = e.target.name;
//     setData(prevData => ({ ...prevData, [name]: value }));
//   }

//   function handleImage(e) {
//     setData(
//         prevData => ({ ...prevData, [e.target.name]: e.target.files[0]})
//     )
//   }

//   function openModal() {
//     setData(prevData => ({ ...prevData, isModalOpen: true }))
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     })
//     let body = document.querySelector("body")
//     body.style.overflow = "hidden"
//   }

//   function closeModal() {
//     setData(prevData => ({ ...prevData, isModalOpen: false }))
//     let body = document.querySelector("body")
//     body.style.overflow = "unset"
//   }

//   return (
//     <div className="all">
//       <button className="modal--button" onClick={openModal}>Contratar</button>
//       <Modal isOpen={data.isModalOpen} onClose={closeModal}>
//         <header className="container--header">
//           <div className="logo-container">
//             <FaChevronRight color="#ff9900" fontSize="inherit" />
//             <span className="logo-dev">dev.</span>
//             <span className="logo-find">find(</span>
//             <span className="logo-par">)</span>
//           </div>
//           <VscClose onClick={closeModal} className="icon--modal" />
//           <div className="header--title"><h1>Editar Perfil</h1></div>
//         </header>
//         <div className="holder-2">
//           <div className="parent-2-1">
//             <center>
//               <form onSubmit={handleSubmit} className="form--modal-2" action="">
//                 <div className="">
//                   <label id="special"  className="title-input">Nome:</label>
                 
//                 </div>

//                 <div className="">
//                   <label className="title-input">Descrição:</label>
                
//                 </div>

//                 <div className="">
//                   <label className="title-input">Empresa:</label>
                 
//                 </div>

//                 <div className="">
//                   <label className="title-input">Localização:</label>
                
//                 </div>

//                 <div className="">
//                   <label className="title-input">Número/Telefone:</label>
                 
//                 </div>
         
//                 <div className="save--container-2">
//                   <input type="submit" value="Contratar!" className="private-inp" />
//                 </div>
//               </form>
//             </center>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// class Modal extends React.Component {
//   render() {
//     if (this.props.isOpen === false)
//       return null

//     return (
//       <div>
//         <div className="modal">
//           {this.props.children}
//         </div>
//         <div className="bg" onClick={e => this.close(e)} />
//       </div>
//     )
//   }

//   close(e) {
//     e.preventDefault()

//     if (this.props.onClose) {
//       this.props.onClose()
//     }
//   }
// }

