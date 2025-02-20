import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
    -Logo
    -Nav Items
Body
    -Search 
    -Restaurant card container
        -Restaurant card
            -Img
            -Name of Res, Star rating, cuisine, delivery time
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img src="https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/33a0e76c-d670-4bd8-b150-64b450896b99/Delicious+food.png?format=2500w" alt="indian-food"/>
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
                < RestaurantCard />
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
            {/* Footer */}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);