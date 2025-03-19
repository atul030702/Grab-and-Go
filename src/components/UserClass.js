import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    render() {
        const { name, location } = this?.props || {};
        const {count} = this?.state;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @su30_simp</h4>
                <h4>Count: {count}</h4>
                <button className="increase-btn"
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >Increase count</button>
            </div>
        );
    }
}

export default UserClass;