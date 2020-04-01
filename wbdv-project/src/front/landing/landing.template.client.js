import React from "react";
import "./LandingPageContainer.css"

class LandingPageContainer extends React.Component{
    render() {
        return(
            <div id = "background-container">

                <div id="header" className="container-fluid row">
                    <h1 className="col-3">Stocks4all</h1>
                    <h4 className="col-3 offset-6">About</h4>
                </div>
                <div id="access" className="container">
                    <button className="btn btn-primary">Continue as a guest</button>
                    <button className="btn btn-primary">Login now!</button>
                    <button className="btn btn-primary">Register as a new user</button>
                </div>
                <video autoPlay muted loop id="bgVideo">
                    <source src="dollar.mp4" type="video/mp4"/>
                </video>
            </div>

        );
    }

} export default LandingPageContainer