import "./styles.css";
import React from "react";
import { BiBulb } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import NumberCounter from 'number-counter';
import Typewriter from 'typewriter-effect';
import { AnimationHome } from "../../components/AnimationHome"
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
                        <div className="text-list">
                            <Typewriter
                                options={{
                                    delay:100,
                                    cursor:"|",
                                    loop:true
                                  }}

                                onInit={(typewriter) => {
                                    typewriter.typeString('precisando de desenvolvedores?<br />')
                                        .pauseFor(1000)
                                    typewriter.typeString(" aqui você encontra!")
                                        .pauseFor(20000)
                                        .deleteAll()
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                            <AnimationHome/>
                        </div>
                    </li>

                    <AnimationHome/>
                    <div className="subtitulo">aqui se encontram diariamente os melhores <br/>
desenvolvedores do Brasil!</div>

                    <div className="buttons">
                        <center>
                            <a href="/publicar-projeto"><button className="botao-contratar"><p className="texto-botao-contratar">Contratar</p></button></a>
                            <br />
                            <a href="/login"><button className="botao-seja-um"><p className="texto-botao-seja-um">Seja um desenvolvedor</p></button></a>
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
                    <br />
                    <h1 className="titulo"> <span className="p-title-1">como</span> <span className="p-title-2">funciona?</span></h1>
                    <br />
                    <div className="icon--desc"><BiBulb className="icon--svg" /></div>
                    <h3 className="titulo--icon ">Contrate</h3>
                    <p className="desc--icon">Publique o seu projeto para milhares de
                    profissionais,
                        você irá receber propostas de freelancers talentosos em poucos minutos.</p>
                    <div className="icon--desc"><FaUserFriends className="icon--svg" /></div>
                    <h3 className="titulo--icon ">Seja um de nós</h3>
                    <p className="desc--icon">Seja um desenvolvedor e fique atento ao nosso feed, milhares de propostas estarão a sua espera.</p>

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
                        <div className="box">
                            <span className="box-text"><NumberCounter className="box-feature" start={0} end={1100} delay={4} preFix="+" postFix="" /></span>
                            <h5 className="down-text-box">desenvolvedores ativos todos os dias</h5>
                        </div>
                        <div className="box">
                            <span className="box-text"><NumberCounter className="box-feature" start={0} end={500} delay={4} preFix="+" postFix="" /></span>
                            <h5 className="down-text-box">usúarios cadastrados</h5>
                        </div>
                        <div className="box">
                            <span className="box-text"><NumberCounter className="box-feature" start={0} end={200} delay={4} preFix="+" postFix="" /></span>
                            <h5 className="down-text-box">projetos postados na página</h5>
                        </div>
                        <div className="box">
                            <span className="box-text"><NumberCounter className="box-feature" start={0} end={300} delay={4} preFix="+" postFix="" /></span>
                            <h5 className="down-text-box">clientes satisfeitos</h5>
                        </div>
                        <div className="box">
                            <span className="box-text"><NumberCounter className="box-feature" start={0} end={23} delay={4} preFix="+" postFix="" /></span>
                            <h5 className="down-text-box">desenvolvedores verificados</h5>
                        </div>
                        <div className="box">
                            <span className="box-text"><NumberCounter className="box-feature" start={0} end={2} delay={4} preFix="+" postFix="" /></span>
                            <h5 className="down-text-box">meses atuando</h5>
                        </div>
                    </div>
                </div>

                <br /><br /><br /><br /><br />
            </>
        );
    }
}

