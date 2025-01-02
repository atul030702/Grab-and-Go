const parent = React.createElement(
    "div", 
    {id: "parent"},[
        React.createElement(
            "div", 
            {id: "child"},[
            React.createElement("h1", {}, "I'm a H1 Tag! || Atul Singh"),
            React.createElement("h2", {}, "I'm a h2 tag!|| Brother of h1"),
        ]),
        React.createElement(
            "div", 
            {id: "child2"},[
            React.createElement("h1", {}, "I'm a h1//2 Tag! || Atul Singh"),
            React.createElement("h2", {}, "I'm a h2//2 tag!|| Brother of h1"),
        ])
    ]
);

//const heading = React.createElement('h1', {id: "heading"}, 'Hello world from React! || By Atul Shekhar Singh');
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(parent);