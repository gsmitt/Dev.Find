import { FaChevronRight } from "react-icons/fa";
import "./styles.css";

export function Logo(props) {
    if(props.cor == "white"){
            return (
        <span className="wraper">
            <FaChevronRight color="#ff9900" fontSize="inherit"/>
            <span className="dev white">dev.</span>
            <span className="find orange">find(</span>
            <span className="par orange">)</span>
        </span>
    );
    }


    return (
        <span className="wraper">
            <FaChevronRight color="#ff9900" fontSize="inherit"/>
            <span className="dev">dev.</span>
            <span className="find">find(</span>
            <span className="par">)</span>
        </span>
    );
}

