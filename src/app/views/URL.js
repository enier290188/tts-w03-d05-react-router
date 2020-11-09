import React from "react";
import {Switch, Route, Redirect} from "react-router";
import Page404 from "./page-404/Page404";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";
import Resume from "./resume/Resume";
import Works from "./works/Works";
import Contact from "./contact/Contact";


const URL = () => {
    return (
        <Switch>
            <Route path="/" exact><Redirect from="/" to="/home/"/></Route>
            <Route path="/home/" component={Home}/>
            <Route path="/about-me/" component={AboutMe}/>
            <Route path="/resume/" component={Resume}/>
            <Route path="/works/" component={Works}/>
            <Route path="/contact/" component={Contact}/>
            <Route path="*" component={Page404}/>
        </Switch>
    );
}

export default URL;
