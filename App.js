import React from "react";
import ReactDOM from "react-dom/client";

//React Element => Object => render => HTML Element
// const heading = (<h1 id="heading" className="head">
//     Hello react using JSX || Namaste React 🚀
// </h1>);
// console.log(heading);

// //React Component(functional)
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React functional component</h1>;
// };

// const HeadingComponent1 = () => (
//     <div id="container">
//         <HeadingComponent />
//         <h1 className="heading">Namaste React from Nested functional component</h1>
//     </div>
// );

const HeaderComponent = () => {
    return (<div className="container">
        <img src="https://www.airforce-technology.com/wp-content/uploads/sites/6/2017/09/1l-image-24.jpg" alt="su30mki"/>
        <input type="text" placeholder="Search..."/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);