import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getProfile} from "../../services/ProfileService";
import UserService from '../../services/UserService'

class ProfilePageClient extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            username: '',
            password: '',
            email: '',
            watchlist: [],

            session:false
        }
        this.UserService = new UserService();
    }


    componentDidMount = async () => {

        const profile = await this.UserService.getSession()
        if(profile.username !== "PLEASE LOGIN FIRST"){
            this.setState({
                id: profile.id,
                password: profile.password,
                username: profile.username,
                email: profile.email,
                watchlist: profile.watchlist,
                session:true
            })
        }
    }

    update = (user) => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/api/users/${this.state.id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        })
    }
    render() {
        return(
            <div className="container">
                <h2>Profile Page</h2>
                <Link to="/home">
                    Go back to homepage.{this.state.id}
                </Link>

                {   this.state.editing &&
                    <div className="form-group row">
                    <label htmlFor="last" className="col-sm-2">
                        username: </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-lastname"
                               id="lastName" placeholder=""
                               value={this.state.username}
                               onChange={(e) => this.setState({
                                    username: e.target.value
                               })}
                        />
                    </div>
                        <br/>

                    <label htmlFor="first" className="col-sm-2">
                        email: </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-firstname"
                               id="email" placeholder=""
                               value={this.state.email}
                               onChange={(e) => this.setState({
                                   email: e.target.value
                               })}
                        />
                    </div>
                        <label htmlFor="first" className="col-sm-2">
                            password: </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-firstname"
                                   id="password" placeholder=""
                                   value={this.state.password}
                                   onChange={(e) => this.setState({
                                       password: e.target.value
                                   })}
                            />
                        </div>
                        <button onClick={ () => {
                            this.update(this.state)
                            this.setState({
                                editing: false
                            })
                        }}>Save</button>
                </div>}
                {   !this.state.editing &&
                    <div>
                        <label htmlFor="username" className="col-sm-2"> username: {this.state.username}</label>

                        <label htmlFor="email" className="col-sm-2"> email: {this.state.email} </label>
                        <label htmlFor="password" className="col-sm-2"> password: {this.state.password} </label>
                        <ul>
                            <li></li>
                        </ul>

                        <button onClick={ () => {
                            this.setState({
                                editing: true
                            })
                        }}>Edit</button>
                    </div>
                }


            </div>
        )
    }
}
const stateToPropertyMapper = (state) => ({
    profile: state.lessons.lessons
})


export default ProfilePageClient
