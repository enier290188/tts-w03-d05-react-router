import React from "react";
import Content from "../../layout/content/Content";
import LeftSide from "../../layout/content/left-side/LeftSide";
import Center from "../../layout/content/center/Center";
import {BsFillEnvelopeFill} from "react-icons/bs";

class Contact extends React.Component {
    render() {
        return (
            <Content>
                <LeftSide/>
                <Center icon={BsFillEnvelopeFill} title="Contact">
                    Content from Contact.
                </Center>
            </Content>
        );
    }
}

export default Contact;
