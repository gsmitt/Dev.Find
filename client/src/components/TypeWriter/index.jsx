//import "./styles.css";
import { useState, useEffect } from "react";


export function TypeWriter(props) {

    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        let ct = props.content
        if (text.length < ct.length){

            setTimeout(() => {
                setText(text+ct[count])
                setCount(count+1)
            }, 100)
        }
        
        /*
        function loop(x){
            setTimeout(() => {
                setText(text+ct[x])
                console.log(x)
                loop(x+1)
            }, 500)
        }

        loop(0)
        */
    });




    return (
        <span>
            {text}
        </span>
    );
}

