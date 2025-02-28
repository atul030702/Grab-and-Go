import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { menu_API } from "../utils/constants.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(menu_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const response = await data.json();
        console.log(response);

        setResInfo(response?.data);
    };

    const imageURL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo?.cloudinaryImageId}`;
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
                
                <p>{cuisines.join(" ,")}</p>
                <p>Outlet: {areaName}</p>
                <p>{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} minutes</p>
            </div>

            <div>
                <h2>Menu</h2>
                <div className="recommended-dishes">
                    <h3>Recommended (0 ?? {itemCards.length})</h3>
                        {itemCards.map((item) => {
                            return (
                                <ul key={item?.card?.info?.id}>
                                    <li>{item?.card?.info?.name} - ₹{(item?.card?.info?.price) / 100}</li>
                                    <li>{item?.card?.info?.itemAttribute?.vegClassifier}</li>
                                </ul>
                            );
                        })}
                </div>
                
            </div>
        </div>
    )
};

export default RestaurantMenu;