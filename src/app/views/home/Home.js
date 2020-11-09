import React from "react";
import Content from "../../layout/content/Content";
import imgAvatar from "../../img/avatar.jpg";
import {BsFillHouseFill} from "react-icons/bs";
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";

class Home extends React.Component {
    render() {
        return (
            <Content icon={BsFillHouseFill} title="Home">
                <div className="jumbotron m-0 p-5 border border-muted bg-light">
                    <h1 className="text-center font-weight-bolder">I'm Enier Ramos Garcia.</h1>
                    <div className="card m-0 my-3 p-0 border-0 rounded-0 bg-transparent text-center">
                        <div className="card-img-top m-0 p-0 border-0 bg-transparent">
                            <img src={imgAvatar} className="img-thumbnail border border-muted rounded bg-white" width="160px" height="160px" alt=""/>
                        </div>
                    </div>
                    <p className="lead m-0 p-0 text-center">I want my job to make me feel useful in society, that it is not just a job, but also to know that what I do it is important for someone else in their life or their job,no matter how many people benefit from it. I want to feel what I do is meaningful.</p>
                    <hr className="m-0 my-5 p-0 border border-muted"/>
                    <div className="m-0 p-0 text-center">
                        <a className="btn btn-link m-0 mx-3 p-0" href="https://www.facebook.com/enier290188/" role="button">
                            <FaFacebook size="48px"/>
                        </a>
                        <a className="btn btn-link m-0 mx-3 p-0" href="https://www.linkedin.com/in/enier290188/" role="button">
                            <FaLinkedin size="48px"/>
                        </a>
                        <a className="btn btn-link m-0 mx-3 p-0" href="https://github.com/enier290188/" role="button">
                            <FaGithub size="48px"/>
                        </a>
                    </div>
                </div>
            </Content>
        );
    }
}

export default Home;
