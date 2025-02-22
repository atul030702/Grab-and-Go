import RestaurantCard from "./RestaurantCard.js";
import listOfRestaurantsJS from "../utils/resList.js";
import { useState } from "react";



const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState(listOfRestaurantsJS);

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                    console.log(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant?.data?.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>
    );
}

export default Body;