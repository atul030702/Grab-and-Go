import { brandLogo } from "../utils/constants.js";
import { useState } from "react";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("LogIn");

    return (
        <div className="header">
            <div className="logo-container">
                <img src={brandLogo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
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