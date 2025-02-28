import { brandLogo } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("LogIn");

    return (
        <div className="header">
            <div className="logo-container">
                <img src={brandLogo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "LogIn" 
                            ? setBtnNameReact("LogOut") 
                            : setBtnNameReact("LogIn");
                    }}>
                        { btnNameReact }
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;