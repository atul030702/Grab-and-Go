import UserClass from "./UserClass.js";
import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React by Atul, I am learning react routing today</h2>

                < UserClass name={"Atul Singh (First)"} location={"Patna"} />
                < UserClass name={"Atul Kumar (Second)"} location={"Katalpur"} />
            </div>
        )
    }
}

export default About;