import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);


    const restaurantHeadInfo = resInfo?.cards[2]?.card?.card?.info;
    const {
        name, 
        cuisines, 
        costForTwoMessage, 
        avgRating,
        totalRatingsString, 
        areaName, 
        sla
    } = restaurantHeadInfo || {};

    const restaurantRecommendedMenuInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {itemCards} = restaurantRecommendedMenuInfo || {};

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{name}</h1>

            <div className="restaurant-info">
                <div className="rating-info">
                    <p>{avgRating} ({totalRatingsString})</p>
                    <li>{costForTwoMessage}</li>
                </div>
                
                <p>{cuisines.join(", ")}</p>
                <p>Outlet: {areaName}</p>
                <p>{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} minutes</p>
            </div>
            <h2>Menu</h2>
        </div>
    )
};

export default RestaurantMenu;