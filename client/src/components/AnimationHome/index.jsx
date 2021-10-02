import "./styles.css";
import useEffect from "react"
const anime = require('animejs');

export function AnimationHome(props) {

    useEffect(
        anime({
            targets: ".dot",
            translateY: [1000,-100],
            //borderRadius: 50,
            duration: 3000,
            direction: "normal",
            loop: true,
            //rotate: 90,
            easing: "linear"
        })
    )

    return (
        <div className="container">
            <div className="dot"></div>
        </div>
    );
}

