import React from "react";
import {NavLink} from "react-router-dom";
import Content from "../../layout/content/Content";
import LeftSide from "../../layout/content/left-side/LeftSide";
import Center from "../../layout/content/center/Center";
import {BsAwardFill} from "react-icons/bs";

class Resume extends React.Component {
    render() {
        return (
            <Content>
                <LeftSide/>
                <Center icon={BsAwardFill} title="Resume">
                    <table className="table table-borderless table-responsive">
                        <tr>
                            <td colSpan="4" className="border-bottom border-muted"><h1><strong>Enier Ramos García</strong></h1></td>
                        </tr>
                        <tr>
                            <td className="border-right border-bottom border-muted">&nbsp;</td>
                            <td colSpan="3" className="border-right-0 border-bottom border-muted"><strong>Address:</strong> Newport News, VA<br/><strong>Mobile:</strong> +1 (757) 230 0031<br/><strong>E-mail:</strong> <a href="mailto:enier290188@gmail.com">enier290188@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td className="border-right border-bottom border-muted"><strong>Personal profile</strong></td>
                            <td colSpan="3" className="border-right-0 border-bottom border-muted">I’m a confident, punctual and reliable person. I can work within a team or on my own and offer any employer a friendly disposition. I consider myself a very positive person and I always try to share the joy with the people that surround me.</td>
                        </tr>
                        <tr>
                            <td className="border-right border-bottom border-muted"><strong>Career goal</strong></td>
                            <td colSpan="3" className="border-right-0 border-bottom border-muted">I want my job to make me feel useful in society, that it is not just a job, but also to know that what I do it is important for someone else in their life or their job,no matter how many people benefit from it. I want to feel what I do is meaningful.</td>
                        </tr>
                        <tr>
                            <td rowSpan="4" className="border-right border-bottom border-muted"><strong>Professional experience</strong></td>
                            <td className="border-right border-bottom border-muted text-nowrap">Jun 2015 - Jan 2019</td>
                            <td className="border-right border-bottom border-muted">Department of Informatization at UCLV<sup><NavLink to="/resume/">(1)</NavLink></sup></td>
                            <td className="border-right border-bottom border-muted">Santa Clara, Cuba</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="border-right-0 border-bottom border-muted">
                                <ul>
                                    <li>
                                        <strong>Python/Django Developer.</strong>
                                        <ul>
                                            <li>Used Docker, Python, Django, Bootstrap and jQuery to design server applications and client interfaces.</li>
                                            <li>Developed and deployed applications on Linux platforms.</li>
                                            <li>Managed continuous maintenance and troubleshooting of Python/Django projects.</li>
                                            <li>Collaborated with other developers to handle complicated issues related with the deployment of Python/Django based applications.</li>
                                            <li>Designed and configured databases of web applications.</li>
                                            <li>Handled the development and management of user interfaces with HTML, CSS and JavaScript.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Products:</strong>
                                        <ul>
                                            <li>Web application for the management and general use of the University’s high performance computer cluster.<br/><strong>URL:</strong> <a href="https://portal.uclv.hpc.cu">https://portal.uclv.hpc.cu</a></li>
                                            <li>Web application for the management and evaluation of the scientific, technological and innovati ve work of the University’s staff.<br/><strong>URL:</strong> <a href="https://cti.uclv.edu.cu">https://cti.uclv.edu.cu</a></li>
                                            <li>Web application for the management of the payment of the stipend to the students of the University.<br/><strong>URL:</strong> <a href="https://estipendio.uclv.edu.cu">https://estipendio.uclv.edu.cu (It is only accessible from within the institution)</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Collaboration:</strong>
                                        <ul>
                                            <li>I worked at the computer cluster of the University of Ghent in Belgium, as part of a collaboration project between Belgian and Cuban universities (VLIR).<br/><strong>URL:</strong> <a href="https://github.com/hpcugent/vsc-accountpage">https://github.com/hpcugent/vsc-accountpage (It is a private project)</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-right border-bottom border-muted text-nowrap">Sep 2013 - Jun 2015</td>
                            <td className="border-right border-bottom border-muted">Provincial Prosecutor’s Office of Villa Clara</td>
                            <td className="border-right border-bottom border-muted">Santa Clara, Cuba</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="border-right-0 border-bottom border-muted">
                                <ul>
                                    <li>
                                        <strong>IT Network Administrator.</strong>
                                        <ul>
                                            <li>Managed all network services.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="border-right border-bottom border-muted"><strong>Education</strong></td>
                            <td className="border-right border-bottom border-muted text-nowrap">Sep 2008 - Jun 2013</td>
                            <td className="border-right border-bottom border-muted">UCLV<sup><NavLink to="/resume/">(1)</NavLink></sup></td>
                            <td className="border-right border-bottom border-muted">Santa Clara, Cuba</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="border-right-0 border-bottom border-muted">
                                <ul>
                                    <li><strong>BSc in Software Engineering.</strong></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-right border-bottom border-muted"><strong>Key skills</strong></td>
                            <td colSpan="2" className="border-right-0 border-bottom border-muted">
                                <ul>
                                    <li>Django Web Development Framework.</li>
                                    <li>Python, PHP, Java.</li>
                                    <li>Knowledge of developing Oriented Object Programming.</li>
                                    <li>REST APIs.</li>
                                    <li>CSS3, HTML5, DHTML, XHTML, XML, JSON, JavaScript ES6.</li>
                                    <li>Bootstrap4, JQuery, React JS.</li>
                                    <li>Knowledge of managing database using Postgres, MySQL.</li>
                                    <li>Windows and Linux (servers and workstations).</li>
                                    <li>Capabilities to use Docker, Vagrant, Selenium, Celery, Code SQL outside ORM and Git.</li>
                                </ul>
                            </td>
                            <td className="border-right-0 border-bottom border-muted">
                                <ul>
                                    <li>Intermediate</li>
                                    <li>Intermediate/Basic/Basic</li>
                                    <li>Intermediate</li>
                                    <li>Intermediate</li>
                                    <li>Intermediate</li>
                                    <li>Intermediate/Intermediate/Basic</li>
                                    <li>Basic</li>
                                    <li>Intermediate</li>
                                    <li>Intermediate</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-right border-bottom border-muted"><strong>Languages</strong></td>
                            <td colSpan="3" className="border-right-0 border-bottom border-muted">
                                <ul>
                                    <li><strong>Spanish (native), English (basic).</strong></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4"><sup><NavLink id="uclv" to="/resume/">(1)</NavLink></sup> UCLV => Universidad Central "Marta Abreu" de Las Villas, Cuba (Central University "Marta Abreu" of Las Villas, Cuba).</td>
                        </tr>
                    </table>
                </Center>
            </Content>
        );
    }
}

export default Resume;
