import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import ContactUS from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Footer from "./components/Footer.js";
import "../src/style.css";

const About = lazy(() => import("./components/About.js") );

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            
            <Outlet />
        </div>
    )
};

const HomePage = () => {
    return (
        <>
            <Body />
            <Footer />
        </>
    );
};

const AboutPage = () => {
    return (
        <>
            <About />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <AboutPage />
                </Suspense>
            },
            {
                path: "/contact",
                element: <ContactUS />
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