import React from "react";
import Content from "../../layout/content/Content";
import LeftSide from "../../layout/content/left-side/LeftSide";
import Center from "../../layout/content/center/Center";
import {BsFillPersonLinesFill} from "react-icons/bs";

class AboutMe extends React.Component {
    render() {
        return (
            <Content>
                <LeftSide/>
                <Center icon={BsFillPersonLinesFill} title="About ME">
                    <p className="m-0 p-0">I’m a confident, punctual and reliable person. I can work within a team or on my own and offer any employer a friendly disposition. I consider myself a very positive person and I always try to share the joy with the people that surround me.</p>
                </Center>
            </Content>
        );
    }
}

export default AboutMe;
