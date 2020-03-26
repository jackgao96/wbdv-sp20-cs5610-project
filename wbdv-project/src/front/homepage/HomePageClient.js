import React from "react";

class HomePageClient extends React.Component {
    render() {
        return (
            <div>
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
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
                    <a className="btn btn-outline-primary" href="#"> Sign up </a>
                </div>
                <div className="container">
                    <div className=" row">
                        <div className=" mt-3 col-md-4">
                            <a href="#">
                                <div className="card mb-4 shadow-sm">
                                    <h5> Slow growers </h5>
                                    <p>Large capital. Around 5% annual growth (CAGR - Compound annual growth rate).
                                        Generous & regular dividends</p>
                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a href="#">
                                <div className="card mb-4 shadow-sm">
                                    <h5> Stalwarts </h5>
                                    <p> Large capital. Around 10% annual growth (CAGR).</p>
                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a href="#">
                                <div className="card mb-4 shadow-sm">
                                    <h5> Fast growers </h5>
                                    <p>Small and mid capital stocks. Annual growth of 25%. </p>
                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a href="#">
                                <div className="card mb-4 shadow-sm">
                                    <h5> Cyclicals </h5>
                                    <p>Periodically falling and rising</p>
                                </div>
                            </a>
                        </div>
                        <div className="mt-3 col-md-4">
                            <a href="#">
                                <div className="card mb-4 shadow-sm">
                                    <h5> Turnarounds </h5>
                                    <p>Large rise after a long fall</p>
                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a href="#">
                                <div className="card mb-4 shadow-sm">
                                    <h5> Asset plays </h5>
                                    <p>High asset value</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageClient