import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import URL from "./app/views/URL";
import Header from "./app/layout/header/Header";
import Footer from "./app/layout/footer/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <URL/>
                <Footer/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("app")
);
