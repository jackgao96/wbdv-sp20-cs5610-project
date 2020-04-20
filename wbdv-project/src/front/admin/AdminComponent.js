import * as React from "react";
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import AdminService from "../../services/AdminService";
export default class AdminComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            users: [],
            profile: {}
        }
        this.UserService = new UserService();
        this.AdminService = new AdminService();
    }
    DeleteUser = async (userid) => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/api/users/` + userid, {
            method: 'DELETE',
            credentials: "include"
        }).then(status => console.log(this.state.profile))
            .then(result => fetch(`https://infinite-retreat-10652.herokuapp.com/api/users`, {
                method: 'GET',
                credentials: "include"
            })).then(reseponse => reseponse.json()).then(users => this.setState({
            users: users
        })).then(status => console.log(this.state.profile))
    }

    logout(){
        this.UserService.logout();
        this.setState({
            profile:{}
        })

        //this.history.push('/home'))
    }
    componentDidMount = async () => {

        fetch(`https://infinite-retreat-10652.herokuapp.com/admin/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            profile: profile
        })).then(status => console.log(this.state.profile))

        fetch(`https://infinite-retreat-10652.herokuapp.com/admin/profile`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(profile => this.setState({
            profile: profile
        })).then(status => console.log(this.state.profile))

        fetch(`https://infinite-retreat-10652.herokuapp.com/api/users`, {
            method: 'GET',
            credentials: "include"
        }).then(reseponse => reseponse.json()).then(users => this.setState({
            users: users
        })).then(status => console.log(this.state.profile))

        fetch(`https://infinite-retreat-10652.herokuapp.com/api/stocks`, {
            method: 'GET',

        }).then(reseponse => reseponse.json()).then(stocks => this.setState({
            stocks: stocks
        })).then(status => console.log(this.state.stocks))

    }

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
                    className="d-flex flex-column align-items-center bg-white border-bottom shadow-sm">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h2 className="navbar-brand" >Stocks4all</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/home">
                                        <button className="btn btn-outline-dark">Home</button>
                                    </Link>
                                </li>
                                <li className="nav-item" hidden={!this.state.admin.username}>
                                    <Link to="/admin">
                                        <button className="btn btn-outline-dark">Admin options</button>
                                    </Link>
                                </li>
                                <li className="nav-item " hidden={this.state.admin.username}>
                                    <Link to="/watchlist">
                                        <button className="btn btn-outline-dark">Watchlist</button>
                                    </Link>
                                </li>
                                <li className="nav-item" hidden={this.state.admin.username}>
                                    <Link to="/research">
                                        <button className="btn btn-outline-dark">Self-Research</button>
                                    </Link>
                                </li>
                                <li className="nav-item nav-right" hidden={this.state.profile.username || this.state.admin.username}>
                                    <Link className="" to="/login">
                                        <button className="btn btn-outline-primary">Login</button>
                                    </Link>
                                </li>
                                <li className="nav-item nav-right" hidden={this.state.profile.username || this.state.admin.username}>
                                    <Link to="/register">
                                        <button className="btn btn-outline-primary">SignUp</button>
                                    </Link>
                                </li>
                                <li className="nav-item nav-right" hidden={!this.state.profile.username && !this.state.admin.username}>
                                    <button className="btn btn-outline-primary" onClick={() => this.logout()}>Log
                                        out
                                    </button>
                                </li>
                                <li className="nav-item nav-right"  hidden={!this.state.profile.username || this.state.admin.username}>
                                    <Link to="/profile">
                                        <button className="btn btn-outline-primary">Profile</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
                {this.state.profile.username &&
                <div class="container">
                    <div>
                        <h3>
                            Hi,{this.state.profile.username}
                        </h3>
                    </div>
                    <h5>User List</h5>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Password</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(user =>
                                <tr>
                                    <th scope="row">
                                        {user.id}
                                    </th>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        {user.password}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-danger my-0"
                                            onClick={() => {
                                                this.DeleteUser(user.id)
                                            }
                                            }>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <h5>Stock List</h5>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Recommendation</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.stocks.map(stock =>
                                <tr>
                                    <th scope="row">
                                        {stock.id}
                                    </th>
                                    <td>
                                        {stock.name}
                                    </td>
                                    <td>
                                        {stock.category}
                                    </td>
                                    <td>
                                        {stock.recommendation}
                                    </td>

                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                }
                {
                    !this.state.profile.username &&
                    <div>
                        <h3>
                            Access Denied
                        </h3>
                    </div>
                }
            </div>)
    }
}