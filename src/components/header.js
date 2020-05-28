import react from "react";
import {link} from "react-router";

export const header = (props) => 
{
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><link to={"/app.js"}></link>World Wide</li>
                        <li><link to={"/sriLanka.js"}></link>Sri Lanka</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};