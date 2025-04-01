import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import brandIcon from "../assets/brand-logo.webp";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("LogIn");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex w-full h-[100px] bg-white-100 justify-between shadow-lg mb-2">
            <div className="flex items-center justify-center">
                <img src={brandIcon} alt="logo" className="w-[225px] h-[175px]"/>
            </div>
            <div className="p-2 flex items-center gap-1" >
                <ul className="flex justify-center items-center flex-grow flex-wrap w-full p-4 m-4 text-[22px] font-semibold">
                    <li className="px-4 cursor:pointer hover:bg-[#d97919] rounded-xl hover:scale-[1.1]">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4 cursor:pointer hover:bg-[#d97919] rounded-xl hover:scale-[1.1]">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="px-4 cursor:pointer hover:bg-[#d97919] rounded-xl hover:scale-[1.1]">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                  
                    <button className="px-4 cursor:pointer hover:bg-[#d97919] rounded-xl hover:scale-[1.1]"
                     onClick={() => {
                        btnNameReact === "LogIn" 
                            ? setBtnNameReact("LogOut") 
                            : setBtnNameReact("LogIn");
                        }}>
                        { btnNameReact }

                    </button>

                    <li className="size-1 flex items-center justify-center">
                        
                    </li>
                
                </ul>
            </div>
        </div>
    );
}

export default Header;