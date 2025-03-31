import { useState } from "react";

import foodIcon from "../assets/burger.webp";
import AboutMe from "./AboutMe.js";

const About = () => {
    const [buttonName, setButtonName] = useState("See My Profile");
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="m-3.5 p-1.5 flex flex-col w-full items-center justify-center text-[22px] font-semibold"
            >
                <button className="w-max bg-[#d97919] py-1.5 px-2.5 rounded-xl hover:bg-[#c26100] cursor-pointer"
                    onClick={() => {
                        buttonName === "See My Profile" ? setButtonName("Hide The Profile") : setButtonName("See My Profile");
                        setVisible(!visible);
                    }}
                >
                    {buttonName}
                </button>
                { visible && <AboutMe /> }
            </div>

            <div className="w-full h-max flex justify-center items-center p-5 m-2.5">
                <div className="font-serif flex flex-col justify-center items-start flex-wrap text-gray-800">
                    <h1 className="text-6xl my-1">
                        Welcome to<br/>
                        The world of <br/>
                        <span className="bg-[#d97919] px-2.5 mx-1 my-2 rounded-xl overflow-y-hidden text-[#eaeaea]">
                            Taste, Feel, and the Freshness
                        </span>

                    </h1>
                    <h4 className="text-2xl p-1 m-1 italic">
                        "Cravings? We got you covered! Grab&
                        <span className="text-[#d97919]">Go </span> 
                        delivers fresh, 
                        hot, and delicious meals right to your doorstep!"
                    </h4>
                </div>
                <div>
                    <img src={foodIcon} alt="food-icon" loading="lazy" className="w-[350px] h-[450px]"/>
                </div>
            </div>
            
        </div>
    );
};

export default About;