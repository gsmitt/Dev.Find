import "./styles.css";
import React from "react";
import { FaStar } from 'react-icons/fa';



export function Review() {

    return (
        <div className="container__review">
            <div className="post">
                <div className="text">Thanks for rating us!</div>
                <div className="edit">EDIT</div>
            </div>
            <div className="star-widget">
                <input type="radio" name="rate" id="rate-5"></input>
                <label for="rate-5" className="fas fa-star"><FaStar /></label>
                <input type="radio" name="rate" id="rate-4"></input>
                <label for="rate-4" className="fas fa-star"><FaStar /></label>
                <input type="radio" name="rate" id="rate-3"></input>
                <label for="rate-3" className="fas fa-star"><FaStar /></label>
                <input type="radio" name="rate" id="rate-2"></input>
                <label for="rate-2" className="fas fa-star"><FaStar /></label>
                <input type="radio" name="rate" id="rate-1"></input>
                <label for="rate-1" className="fas fa-star"><FaStar /></label>
                <form action="#" />
                <div className="textarea">
                    <textarea cols="30" placeholder="Deixe um comentário..."></textarea>
                </div>
                <div className="btn">
                    <button type="submit">Comment</button>
                </div>
            </div>
        </div>
    );
}

export default Review