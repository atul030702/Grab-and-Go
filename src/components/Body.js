import RestaurantCard from "./RestaurantCard.js";
import listOfRestaurantsJS from "../utils/resList.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";



const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await listOfRestaurantsJS();
            setListOfRestaurant(data);
        }
        fetchData();
    }, []);

    //Till the data is being fetched from api, we will show loader or anything here
    if(listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating >= 4.3
                    );
                    setListOfRestaurant(filteredList);
                    console.log(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
            
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>
    );
}

export default Body;