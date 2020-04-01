import React from "react";
import "./LandingPageContainer.css"
import id from './dollar.mp4'

class LandingPageContainer extends React.Component{
    render() {
        return(
            <div>
            <div class="overlay"></div>
            <video playsinline autoPlay muted loop id="bgVideo">
                <source src={id} type="video/mp4"/>
            </video>
            <div id = "container h-100">
                <div id="header" className="d-flex row">
                    <h1 className="col-3">Stocks4all</h1>
                    <h4 className="col-3 offset-6">About</h4>
                </div>
                <div id="access" className="container fluid">
                    <button className="btn btn-primary">Continue as a guest</button>
                    <button className="btn btn-primary">Login now!</button>
                    <button className="btn btn-primary">Register as a new user</button>
                </div>
            </div>
            </div>

        );
    }

} export default LandingPageContainer