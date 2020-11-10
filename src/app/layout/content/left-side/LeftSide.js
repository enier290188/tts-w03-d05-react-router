import React from "react";
import imgAvatar from "../../../img/avatar.jpg";

class LeftSide extends React.Component {
    render() {
        return (
            <div id="app-content-left" className="col-12 col-md-auto border border-muted bg-light">
                <h3 id="app-content-left-title" className="d-none d-md-block d-md-flex flex-md-row justify-content-md-start align-items-md-center m-0 px-0 px-md-3 py-1 border-bottom border-muted">
                    &nbsp;
                </h3>
                <div id="app-content-left-content" className="m-0 px-0 py-3 p-md-3">
                    <div className="card m-0 p-0 border-0 rounded-0 bg-transparent text-center">
                        <div className="card-img-top m-0 p-0 border-0 bg-transparent">
                            <img src={imgAvatar} className="img-thumbnail border border-muted rounded bg-white" width="160px" height="160px" alt=""/>
                        </div>
                        <div className="card-body m-0 p-0 py-3">
                            <h5 className="card-title m-o p-0">Enier Ramos García</h5>
                            <h6 className="card-title m-o p-0">Newport News, VA</h6>
                            <h6 className="card-title m-o p-0">+1 (757) 230 0031</h6>
                            <h6 className="card-title m-o p-0"><a href="mailto:enier290188@gmail.com">enier290188@gmail.com</a></h6>
                        </div>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LeftSide;
