import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import ContactUS from "./components/Contact.js";
import Error from "./components/Error.js";


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

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <ContactUS />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);