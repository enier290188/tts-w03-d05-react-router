import React from "react";

class Content extends React.Component {
    render() {
        return (
            <main id="app-content" className="m-0 mt-5 p-0 py-1 bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="app-content-center" className="m-0 p-0 p-md-3">
                                <h4 id="app-content-title" className="d-flex flex-row justify-content-start align-items-center m-0 mb-3 p-0 border-bottom border-muted">
                                    {<this.props.icon/>}<span className="m-0 ml-1 p-0">{this.props.title}</span>
                                </h4>
                                <div id="app-content-center-content" className="m-0 p-0">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Content;
