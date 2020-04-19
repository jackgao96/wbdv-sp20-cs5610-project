import React from "react";
import {Link} from "react-router-dom";
import UserService from '../../services/UserService'
import AdminService from "../../services/AdminService";

class HomePageClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            session: false,
            admin: {}
        }
        this.UserService = new UserService();
        this.AdminService = new AdminService();

        const profile = this.UserService.getSession()
        const admin = fetch(`https://infinite-retreat-10652.herokuapp.com/admin/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            admin: profile
        })).then(status => console.log(this.state.profile))

        if (profile.username !== "PLEASE LOGIN FIRST") {
            this.setState({
                profile: profile,
                session: true
            })
        }
        console.log(this.state.profile)


    }

    componentDidMount = async () => {
        const profile = await this.UserService.getSession()
        const admin = fetch(`https://infinite-retreat-10652.herokuapp.com/admin/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            admin: profile
        })).then(status => console.log(this.state.profile))

        if (profile.username !== "PLEASE LOGIN FIRST") {
            this.setState({
                profile: profile,
                session: true
            })
        }
        console.log(this.state.profile)
    }

    logout() {
        //this.UserService.logout();
        this.AdminService.logout();
        this.setState({
            profile: {},
            session: false
        })
    }

    routeToCategory = (catName) => {
        this.props.history.push("/category/" + catName)
    };

    render() {
        return (
            <div>
                {this.state.admin.username}
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal"> Logo Here </h5>
                    <img src=""/>
                    <a> About </a>
                </div>
                <div
                    className="d-flex flex-column align-items-center bg-white border-bottom shadow-sm">

                    <form className="form-inline">
                        <Link to="/home">
                            <button className="btn btn-outline-dark">home</button>
                        </Link>

                        <div hidden={!this.state.admin.username}>
                            <Link to="/admin">
                                <button className="btn btn-outline-dark">admin-options</button>
                            </Link>
                        </div>

                        <div hidden={this.state.admin.username}>
                            <Link to="/watchlist">
                                <button className="btn btn-outline-dark">watch-list</button>
                            </Link>
                        </div>
                        <div hidden={this.state.admin.username}>
                            <Link to="/research">
                                <button className="btn btn-outline-dark">self-research</button>
                            </Link>
                        </div>
                        <div hidden={this.state.profile.username||this.state.admin.username}>
                            <Link className="" to="/login">
                                <button className="btn btn-outline-primary">Log in</button>
                            </Link>
                        </div>
                        <div hidden={this.state.profile.username||this.state.admin.username}>
                            <Link to="/register">
                                <button className="btn btn-outline-primary">Sign up</button>
                            </Link>
                        </div>
                        <div hidden={!this.state.profile.username&&!this.state.admin.username}>
                            <button className="btn btn-outline-primary" onClick={() => this.logout()}>Log out</button>
                        </div>
                        <div hidden={!this.state.profile.username|| this.state.admin.username}>
                            <Link to="/profile">
                                <button className="btn btn-outline-primary">Profile</button>
                            </Link>
                        </div>
                    </form>

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
                                    <h5> Industrials </h5>

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
                            <a onClick={() => this.routeToCategory("UTIL")}>
                                <div className="card mb-4 shadow-sm">
                                    <h5> Utilities </h5>

                                </div>
                            </a>

                        </div>
                        <div className="mt-3 col-md-4">
                            <a onClick={() => this.routeToCategory("FINAN")}>
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
