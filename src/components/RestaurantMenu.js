import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { Shimmer } from "./Shimmer.js";
import { useParams } from "react-router";

import { resImageURL } from "../utils/constants.js";
import starIcon from "../assets/star-rating.svg";

import { MENU_ITEM_TYPE_KEY } from "../utils/constants.js";
import { resImageURL } from "../utils/constants.js";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const restaurantHeadInfo = resInfo?.cards?.[2]?.card?.card?.info;
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

    const menuItemsData = resInfo?.cards.find(x => x.groupedCard)?.
                        groupedCard?.cardGroupMap?.REGULAR?.
                        cards?.map(x => x.card?.card)?.
                        filter(x => x[`@type`] === MENU_ITEM_TYPE_KEY)?.
                        map(x => x.itemCards).flat().map(x => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
        if(!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
        }
    })
    console.log(uniqueMenuItems);
    

    const returnBgColor = (rating) => {
        return rating >= 4 ? "#00ad1d" : "#ec3838";
    };

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="flex flex-col justify-center items-center m-auto max-w-[850px] h-min">
            <div className="flex justify-start items-center bg-[#333333] mb-2.5 w-full">
                <div className="flex">
                    <img src={`${resImageURL}${cloudinaryImageId}`} draggable="false" alt="restaurant-icon" className="w-[250px] h-44 rounded-[5px] m-5" loading="lazy" />
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
            <div className="flex flex-col justify-center items-center w-full mt-5">
                <div className="w-full flex flex-col justify-center items-start p-5 pl-0">
                    <h2 className="text-lg font-semibold">
                        Recommended
                    </h2>
                    <p className="font-medium text-[16px] text-[#545454]">
                        {uniqueMenuItems.length} ITEMS
                    </p>
                </div>

                {uniqueMenuItems.map((item) => (
                    <div key={item?.id} 
                        className="flex justify-between items-center border-b-4 border-b-[#aaa] border-solid m-2.5 pt-0.5 h-150px w-full"
                    >
                        <div className="flex flex-col justify-center items-start flex-wrap text-[#545454] h-full">
                            <h3 className="text-lg font-semibold">
                                {item?.name}
                            </h3>
                            <p className="text-[16px] p-0.5 font-medium">
                                ₹{(item?.price || item?.defaultPrice || item?.cost)/100}
                            </p>
                            <p className="mt-2.5 text-[16px] font-light">
                                {item?.description}
                            </p>
                        </div>
                        <div className="w-80 flex flex-col items-end justify-center h-full">
                            <img src={`${resImageURL}${item?.imageId}`} alt={item?.name} className="size-[100px] rounded-[5px] m-0.5" draggable="false" loading="lazy" />
                            
                            <button className="text-lg rounded-[5px] bg-[#d97919] py-1.5 px-4 my-2.5 cursor-pointer w-[100px] text-black hover:scale-[1.1] transition">
                                ADD +
                            </button>
                            
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default RestaurantMenu;