import React from "react";
import Content from "../../layout/content/Content";
import {BsChatDotsFill} from "react-icons/bs";

class Contact extends React.Component {
    render() {
        return (
            <Content icon={BsChatDotsFill} title="Contact">
                Content from Contact.
            </Content>
        );
    }
}

export default Contact;
