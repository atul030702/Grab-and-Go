import RestaurantCard from "./RestaurantCard.js";
import listOfRestaurantsJS from "../utils/resList.js";

import { Shimmer } from "./Shimmer.js";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listOfRestaurantsJS();
            setListOfRestaurant(data);
            setFilteredRestaurants(data);
        }
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return <h1>Looks like you are offline! Please check your internet connection...</h1>
    }

    return listOfRestaurants.length === 0 ? < Shimmer /> : (
        <div className="body w-full flex-col">
            <div className="flex items-center justify-between">
                <div className="flex m-4 p-4 flex-grow">
                    <input 
                        className="w-[450px] m-4 mr-0 p-2 text-xl rounded-tl-xl rounded-bl-xl box-border
                        capitalize border-1 border-solid border-#aabcca] focus:outline-none
                        font-semibold focus:border-[#c26100]"
                        type="text" 
                        placeholder="search for restaurant..." 
                        value={searchText}  
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="m-4 ml-0 px-3 rounded-tr-xl rounded-br-xl cursor-pointer bg-[#c26100] hover:bg-[#e73336] text-white" 
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) => {
                            return res?.info?.name.toLowerCase().trim().includes(searchText.toLowerCase().trim());
                            });
                            setFilteredRestaurants(filteredRestaurant);
                        }}
                    > 
                        Search 
                    </button>
                </div>

                <button 
                className="filter-btn px-4 py-2 bg-[#0078d7] rounded-xl cursor-pointer font-semibold" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating >= 4.3
                    );
                    setFilteredRestaurants(filteredList);
                    console.log(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex w-full items-center justify-between flex-wrap">
            
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}> 
                        <RestaurantCard resData={restaurant}/> 
                    </Link>
                ))}
                
            </div>
        </div>
    );
}

export default Body;