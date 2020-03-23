import React from "react";

class HomePageClient extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 class="my-0 mr-md-auto font-weight-normal"> Logo Here </h5>
                        <img src=""/>
                        <a> About </a>
                </div>
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <nav className="my-0 mr-md-auto font-weight-normal">
                        <a className="p-2 text-dark" href="#"> home </a>
                        <a className="p-2 text-dark" href="#"> watch list </a>
                        <a className="p-2 text-dark" href="#"> self research </a>
                    </nav>

                    <a className="btn btn-outline-primary" href="#"> log in </a>
                </div>
                <div className="container">
                    <div className=" row">
                        <div className=" mt-3 col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <a> category 1 </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <a> category 2 </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <a> category 1 </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <a> category 1 </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <a> category 1 </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <a> category 1 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
    }
    export default HomePageClient