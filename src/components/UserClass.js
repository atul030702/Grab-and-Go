import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Atul Kumar",
                location: "Default",
            },
        };
        console.log("render phase constructor")
    }

    async componentDidMount() {
        console.log(" Child component did mount");
        //API Call
        const data = await fetch("https://api.github.com/users/atul030702");
        const jsonData = await data.json();
        console.log(jsonData);

        this.setState({
            userInfo: jsonData,
        });
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    render() {
        console.log("render phase completion");
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="user-image"/>

                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @su30_simp</h4>
                
            </div>
        );
    }
}

export default UserClass;