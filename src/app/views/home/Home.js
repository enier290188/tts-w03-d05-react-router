import React from "react";
import Content from "../../layout/content/Content";
import {BsFillHouseFill} from "react-icons/bs";

class Home extends React.Component {
    render() {
        return (
            <Content icon={BsFillHouseFill} title="Home">
                Content from Home.
            </Content>
        );
    }
}

export default Home;
