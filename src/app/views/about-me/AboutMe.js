import React from "react";
import Content from "../../layout/content/Content";
import {BsFillPersonLinesFill, BsEyeFill} from "react-icons/bs";

class AboutMe extends React.Component {
    render() {
        return (
            <Content icon={BsFillPersonLinesFill} title="About ME">
                <p className="">I’m a confident, punctual and reliable person. I can work within a team or on my own and offer any employer a friendly disposition. I consider myself a very positive person and I always try to share the joy with the people that surround me.</p>
                <h4 className="d-flex flex-row justify-content-start align-items-center m-0 mb-3 p-0 border-bottom border-muted">
                    {<BsEyeFill/>}<span className="m-0 ml-1 p-0">Contact Details</span>
                </h4>
            </Content>
        );
    }
}

export default AboutMe;
