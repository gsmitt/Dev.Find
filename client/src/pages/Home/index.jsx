import "./styles.css";
import React from "react";
import { BiBulb } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import NumberCounter from 'number-counter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
</style>

export class Home extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <li className="body-list">
                        <p className="text-list">
                            precisando de <br />
                            desenvolvedores? <br />
                            aqui você encontra!
                        </p>
                    </li>
                    <div className="buttons">
                        <center>
                           <button className="botao-contratar"><p className="texto-botao-contratar">Contratar</p></button>            
                            <br />
                            <button className="botao-seja-um"><p className="texto-botao-seja-um">Seja um desenvolvedor</p></button>

                        </center>

                    </div>
                </div>
                <div className="desc">
                    <br /> <h1 className="titulo"> <span className="p-title-1">quem</span> <span className="p-title-2">somos</span></h1> <br />
                    <p className="p-desc">
                        <br />
                        A dev.find( ) é uma  entidade que surgiu <br />
                        com o propósito de facilitar o encontro <br />
                        de prestadores de serviços TI e pessoas <br />
                        que necessitam do serviço.
                        <br /><br /> <br />
                    </p>
                
                    <h1 className="titulo"> <span className="p-title-1">como</span> <span className="p-title-2">funciona?</span></h1>
                    <br />
                    <div className="icon--desc"><BiBulb /></div>
                    <h3 className="titulo--icon ">Contrate</h3>
                    <p className="desc--icon">Publique o seu projeto para milhares de
                    profissionais,
                        você irá receber propostas de freelancers talentosos em poucos minutos.</p>
                    <div className="icon--desc"><FaUserFriends /></div>
                    <h3 className="titulo--icon ">Seja um de nós</h3>
                    <p className="desc--icon">Publique a sua vaga para milhares de
                    profissionais,
                        você irá receber propostas de freelancers talentosos em poucos minutos.</p>

                    <br /><br />
                    <h1 className="titulo"> <span className="p-title-1">nosso</span> <span className="p-title-2">objetivo</span></h1>
                    <br />
                    <p className="p-desc">
                        <br />
                        <br />
                        Nosso objetivo é tornar cada vez mais <br />
                        acessível a busca de desenvolvedores. <br />
                        Assim honrando o nome dev.find( ). <br />
                        <br />
                        =)

                        <br /><br /> <br />
                    </p>
                    <br /> <h1 className="titulo"> <span className="p-title-1">nossas</span> <span className="p-title-2">vantagens</span></h1>
                    <div className="parent">
                        <div className="box"><p className="box-text">+<NumberCounter end={100} delay={4} /></p></div>
                        <div className="box"><p className="box-text"><NumberCounter end={100} delay={4} /></p></div>
                        <div className="box"><p className="box-text"><NumberCounter end={100} delay={4} /></p></div>
                        <div className="box"><p className="box-text"><NumberCounter end={100} delay={4} /></p></div>
                        <div className="box"><p className="box-text"><NumberCounter end={100} delay={4} /></p></div>
                        <div className="box"><p className="box-text"><NumberCounter end={100} delay={4} /></p></div>
                    </div>
                </div>

                <br /><br /><br /><br /><br />
            </>
        );
    }
}

