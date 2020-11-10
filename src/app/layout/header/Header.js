import React from "react";
import {NavLink} from "react-router-dom";
// import imgLogo from "../../img/logo.svg";
import {BsFillHouseFill, BsFillPersonLinesFill, BsAwardFill, BsTerminalFill, BsChatDotsFill} from "react-icons/bs";
import {DiReact} from "react-icons/di"


class Header extends React.Component {
    render() {
        return (
            <header id="app-header" className="fixed-top m-0 p-0 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-dark navbar-expand-md m-0 p-0 bg-primary">
                                <NavLink className="navbar-brand m-0 p-0" activeClassName="active" to="/">
                                    {/*<img src={imgLogo} width="40px" height="40px" alt=""/>*/}
                                    <DiReact size="48px"/>
                                    <span className="h2 m-0 p-0 align-middle text-white text-uppercase text-decoration-none font-weight-bold">PORTFOLIO</span>
                                </NavLink>
                                <button className="navbar-toggler m-0 p-0" type="button" data-toggle="collapse" data-target="#app-header-navbar-collapse" aria-controls="app-header-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div id="app-header-navbar-collapse" className="collapse navbar-collapse m-0 p-0">
                                    <div className="navbar-nav m-0 ml-auto p-0">
                                        <NavLink className="nav-link d-flex flex-row justify-content-start align-items-center m-0 px-2 py-2" activeClassName="active" to="/home/">
                                            <BsFillHouseFill size="24px"/>
                                            <span className="h6 m-0 ml-1 p-0">Home</span>
                                        </NavLink>
                                        <NavLink className="nav-link d-flex flex-row justify-content-start align-items-center m-0 px-2 py-2" activeClassName="active" to="/about-me/">
                                            <BsFillPersonLinesFill size="24px"/>
                                            <span className="h6 m-0 ml-1 p-0">About Me</span>
                                        </NavLink>
                                        <NavLink className="nav-link d-flex flex-row justify-content-start align-items-center m-0 px-2 py-2" activeClassName="active" to="/resume/">
                                            <BsAwardFill size="24px"/>
                                            <span className="h6 m-0 ml-1 p-0">Resume</span>
                                        </NavLink>
                                        <NavLink className="nav-link d-flex flex-row justify-content-start align-items-center m-0 px-2 py-2" activeClassName="active" to="/works/">
                                            <BsTerminalFill size="24px"/>
                                            <span className="h6 m-0 ml-1 p-0">Works</span>
                                        </NavLink>
                                        <NavLink className="nav-link d-flex flex-row justify-content-start align-items-center m-0 px-2 py-2" activeClassName="active" to="/contact/">
                                            <BsChatDotsFill size="24px"/>
                                            <span className="h6 m-0 ml-1 p-0">Contact</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
