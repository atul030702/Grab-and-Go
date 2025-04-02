import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { Shimmer } from "./Shimmer.js";
import { useParams } from "react-router";

import { resImageURL } from "../utils/constants.js";
import starIcon from "../assets/star-rating.svg";

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
        sla,
        cloudinaryImageId
    } = restaurantHeadInfo || {};

    const restaurantRecommendedMenuInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {itemCards} = restaurantRecommendedMenuInfo || {};

    const returnBgColor = (rating) => {
        return rating >= 4 ? "#00ad1d" : "#ec3838";
    };

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="flex flex-col justify-center items-center m-auto w-auto h-min">
            <div className="flex justify-start items-center bg-[#333333] mb-2.5">
                <div className="flex">
                    <img src={`${resImageURL}${cloudinaryImageId}`} alt="restaurant-icon" className="w-[250px] h-44 rounded-[5px] m-5"/>
                </div>
                <div className="flex flex-col justify-center items-start text-[#eaeaea] m-5 font-[PT Sans, Calibri, sans-serif]">
                    <h1 className="text-[40px] font-medium">
                        {name}
                    </h1>
                    <p className="text-[15px] text-center font-light">{cuisines.join(", ")}</p>

                    <div className="flex justify-start items-center text-lg font-semibold">
                        <div className="w-fit gap-0.5 rounded-lg flex justify-center items-center m-2 px-1.5 py-0.5"
                            style={{backgroundColor: returnBgColor(avgRating)}}
                        >
                            <img src={starIcon} alt="rating-icon" className="size-[22px]"/>
                            <p>{avgRating} </p>
                        </div>
                        <p>{totalRatingsString}</p>
                    </div>

                    <div className="flex justify-center items-center gap-1.5 font-semibold">
                        <p>{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins </p>
                        <p> | {costForTwoMessage}</p>
                    </div>
                
                    <p className="font-medium">Outlet: {areaName}</p>
                </div>
            </div>
            <div></div>
        </div>
    )
};

export default RestaurantMenu;