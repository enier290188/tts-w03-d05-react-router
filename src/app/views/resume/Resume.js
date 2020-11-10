import React from "react";
import Content from "../../layout/content/Content";
import LeftSide from "../../layout/content/left-side/LeftSide";
import Center from "../../layout/content/center/Center";
import {BsAwardFill} from "react-icons/bs";

class Resume extends React.Component {
    render() {
        return (
            <Content>
                <LeftSide/>
                <Center icon={BsAwardFill} title="Resume">
                    Content from Resume.
                </Center>
            </Content>
        );
    }
}

export default Resume;
