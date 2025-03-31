import { brandLogo } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("LogIn");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex w-full bg-pink-100 justify-between shadow-lg mb-2">
            <div className="logo-container">
                <img src={brandLogo} alt="logo" className="w-55"/>
            </div>
            <div className="p-2 flex items-center" >
                <ul className="flex w-full p-4 m-4 text-xl font-semibold">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                  
                    <button className="login-btn px-4" onClick={() => {
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