import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import ContactUS from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
//import Grocery from "./components/Grocery.js";

const Grocery = lazy(() => import("./components/Grocery.js") );

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUS />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery/>
                        </Suspense> 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);