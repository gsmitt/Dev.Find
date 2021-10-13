import "./styles.css";
import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { api, cancelTokenSource } from "../../services/api";
import authServices from "../../services/authServices";
import { Redirect } from "react-router-dom";



export function Review() {
    let [data, setData] = useState({
        review: "",
        rate: 0
    });

    const accessToken = authServices.getAccessToken();

    if (!accessToken) {
        return <Redirect to="/login" />
    }

    const targetId = window.location.pathname.slice(16)
    
    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    const updateRate = rate => {
        setData(prevData => ({ ...prevData, rate: rate }));
        console.log(rate)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const review = (await api.post("/review/", {
                user_get: targetId,
                description: data.review,
                score: data.rate
            })).data;
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="container__review">
            <div className="post">
                <div className="text">Thanks for rating us!</div>
                <div className="edit">EDIT</div>
            </div>
            <div className="star-widget">
                <input type="radio" className="after__input" onClick={()=>{updateRate(5)}} name="rate" id="rate-5"></input>
                <label htmlFor="rate-5" className="fas fa-star"><FaStar /></label>
                <input type="radio" className="after__input" onClick={()=>{updateRate(4)}} name="rate" id="rate-4"></input>
                <label htmlFor="rate-4" className="after__input" className="fas fa-star"><FaStar /></label>
                <input type="radio" className="after__input" onClick={()=>{updateRate(3)}} name="rate" id="rate-3"></input>
                <label htmlFor="rate-3" className="fas fa-star"><FaStar /></label>
                <input type="radio" className="after__input" onClick={()=>{updateRate(2)}} name="rate" id="rate-2"></input>
                <label htmlFor="rate-2" className="fas fa-star"><FaStar /></label>
                <input type="radio" className="after__input" onClick={()=>{updateRate(1)}} name="rate" id="rate-1"></input>
                <label htmlFor="rate-1" className="fas fa-star"><FaStar /></label>
                <form action="#">
                    <div className="review-area">
                        <textarea className="review-text" cols="30" placeholder="Deixe um comentário..." name="review" onChange={handleChange} value={data.review}></textarea>
                    </div>
                    <div className="btn">
                        <button type="submit" onClick={handleSubmit}>Comentar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Review