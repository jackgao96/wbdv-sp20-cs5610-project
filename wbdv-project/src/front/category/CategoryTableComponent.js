import React from "react";
import CategoryTableRow from './CategoryTableRow'
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import AdminService from "../../services/AdminService";

class CategoryTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            session: false,
            admin: {}
        }
        this.UserService = new UserService();
        this.AdminService = new AdminService();
    }
    logout() {
        //this.UserService.logout();
        this.AdminService.logout();
        //alert('111')
        this.setState({
            profile: {}
        })
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
    render() {
        return (
            <div className="container">
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
                <h1 id="categoryHeading">{this.props.category}</h1>
                {this.state.profile.username&&<p>hi,{this.state.profile.username}</p>}
                    {
                        this.props.stocks.map((stock, index) =>
                            <CategoryTableRow
                                addToWatchlist={this.props.addToWatchList}
                                stock={stock}
                                user={this.state.profile}
                            />
                        )
                    }

            </div>
        )
    }

}

export default CategoryTableComponent