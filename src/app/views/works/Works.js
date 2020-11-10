import React from "react";
import Content from "../../layout/content/Content";
import LeftSide from "../../layout/content/left-side/LeftSide";
import Center from "../../layout/content/center/Center";
import {BsTerminalFill} from "react-icons/bs";

class Works extends React.Component {
    render() {
        return (
            <Content>
                <LeftSide/>
                <Center icon={BsTerminalFill} title="Works">
                    Content from Works.
                </Center>
            </Content>
        );
    }
}

export default Works;
