import React from "react";
import ReactDOM from "react-dom/client";

//React Element => Object => render => HTML Element
const heading = (<h1 id="heading" className="head">
    Hello react using JSX || Namaste React 🚀
</h1>);
console.log(heading);

//React Component(functional)
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React functional component</h1>;
};

const HeadingComponent1 = () => (
    <div id="container">
        <HeadingComponent />
        <h1 className="heading">Namaste React from Nested functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);