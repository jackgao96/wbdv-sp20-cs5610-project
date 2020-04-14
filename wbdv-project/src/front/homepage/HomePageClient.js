import React from "react";
import {Link} from "react-router-dom";
class HomePageClient extends React.Component {

    state = {
        profile:{
        }
    }

    componentDidMount = async () => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            profile: profile
        })).then(status => console.log(this.state.profile))

        console.log(this.state.profile)
    }

    constructor(params) {
        super(params);
        this.params = params
    }
    routeToCategory = (catName) => {
      this.props.history.push("/category/"+catName)
    };
    render() {
        return (
            <div>
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal"> Logo Here </h5>
                    <img src=""/>
                    <a> About </a>
                </div>
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <nav className="my-0 mr-md-auto font-weight-normal">
                        <Link to="/">
                            home
                        </Link>
                        <a className="p-2 text-dark" href="#"> watch list </a>
                        <Link to="/research">
                            self-research
                        </Link>
                    </nav>

                    <Link className="btn btn-outline-primary" to="/login">
                        Log in
                    </Link>
                    <Link className="btn btn-outline-primary" to="/register">
                        Sign up
                    </Link>
                </div>
                <div className="container">
                    <div className=" row">
                        <div className=" mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("ENG")}>
                                <div className="card mb-4 shadow-sm">
                                    <h5> Energy</h5>
                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("IND")}>
                                <div className="card mb-4 shadow-sm">
                                    <h5> Industrials  </h5>

                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("CONDFEN")}>
                                <div className="card mb-4 shadow-sm">
                                    <h5> Consumer Discretionary </h5>

                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("TEC")}>
                                <div className="card mb-4 shadow-sm">
                                    <h5> Information Technology </h5>

                                </div>
                            </a>
                        </div>
                        <div className="mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("UTIL")} >
                                <div className="card mb-4 shadow-sm">
                                    <h5> Utilities  </h5>

                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("FINAN")} >
                                <div className="card mb-4 shadow-sm">
                                    <h5> Financial </h5>
                                   
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
