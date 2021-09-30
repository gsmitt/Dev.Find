import { FaChevronRight } from "react-icons/fa";
import "./styles.css";
import { Link } from 'react-router-dom'

export function Logo(props) {

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    if (props.cor === "white") {
        return (
            <Link to='/' onClick={handleClick} className="wraper">
                <FaChevronRight color="#ff9900" fontSize="inherit" />
                <span className="dev white">dev.</span>
                <span className="find orange">find(</span>
                <span className="par orange">)</span>
            </Link>
        );
    }


    return (
        <Link to='/' onClick={handleClick} className="wraper">
            <FaChevronRight color="#ff9900" fontSize="inherit" />
            <span className="dev">dev.</span>
            <span className="find">find(</span>
            <span className="par">)</span>
        </Link>
    );
}

