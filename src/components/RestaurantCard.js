import { foodImage } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    return (
        <div className="res-card">
            <img src={ foodImage } alt="indian-food"/>
            <h3>{resData?.data?.name}</h3>
            <h4>{resData?.data?.cuisine.join(" , ")}</h4>
            <h4>{resData?.data?.avgRating} stars</h4>
            <h4>{resData?.data?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;