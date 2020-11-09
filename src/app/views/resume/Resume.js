import React from "react";
import Content from "../../layout/content/Content";
import {BsAwardFill} from "react-icons/bs";

class Resume extends React.Component {
    render() {
        return (
            <Content icon={BsAwardFill} title="Resume">
                Content from Resume.
            </Content>
        );
    }
}

export default Resume;
