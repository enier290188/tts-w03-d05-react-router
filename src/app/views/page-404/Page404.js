import React from "react";
import Content from "../../layout/content/Content";
import {BsExclamationTriangleFill} from "react-icons/bs";

class Page404 extends React.Component {
    render() {
        return (
            <Content icon={BsExclamationTriangleFill} title="Error 404">
                <p className="m-0 p-0 font-weight-bolder text-center">Page not found.</p>
            </Content>
        );
    }
}

export default Page404;
