import RestaurantCard from "./RestaurantCard.js";
import listOfRestaurantsJS from "../utils/resList.js";
import { searchIcon } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";



const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    console.log("body rendered");

    useEffect(() => {
        async function fetchData() {
            const data = await listOfRestaurantsJS();
            setListOfRestaurant(data);
            setFilteredRestaurants(data);
        }
        fetchData();
    }, []);

    //Conditional rendering (Till the data is being fetched from api, we will show loader or anything here)
    return listOfRestaurants.length === 0 ? < Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search-area">
                    <input 
                        type="text" 
                        placeholder="search for restaurant..." 
                        value={searchText} className="inputbox-search" 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="search-btn" onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) => {
                           return res?.info?.name.toLowerCase().trim().includes(searchText.toLowerCase().trim());
                        });
                        setFilteredRestaurants(filteredRestaurant);
                    }}> 
                        <img src={searchIcon} alt="search-Icon" className="search-icon"/> 
                    </button>
                </div>

                <button 
                className="filter-btn" 
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
            <div className="restaurant-container">
            
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>
    );
}

export default Body;