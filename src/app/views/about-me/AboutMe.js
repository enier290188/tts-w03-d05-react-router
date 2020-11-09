import React from "react";
import Content from "../../layout/content/Content";
import {BsChatQuoteFill} from "react-icons/bs";

class AboutMe extends React.Component {
    render() {
        return (
            <Content icon={BsChatQuoteFill} title="About ME">
                Content from About ME.
            </Content>
        );
    }
}

export default AboutMe;
