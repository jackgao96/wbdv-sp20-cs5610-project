import React from 'react';
import {Link} from 'react-router-dom';
import UserService from '../../services/UserService';

class LoginPageClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{username: '',
                password: ''},
            usertype:"1"
        }
        this.UserService = new UserService();
        console.log(props)
    }

    handleLogin = async (user) => {
       return this.UserService.login(user)
         //this.props.history.push('/home')
    }
    AdminLogin = async (user) => {
        //alert('admin')
        fetch(`https://infinite-retreat-10652.herokuapp.com/admin/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => console.log(response.json()))

    }

    render() {
        return (
            <div className="container">
                <div
                    className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal"> Logo Here </h5>
                    <img src=""/>
                    <a> About </a>
                </div>
                <div
                    className="d-flex flex-column align-items-center bg-white border-bottom shadow-sm">

                    <form className="form-inline">
                        <Link to="/">
                            <button className="btn btn-outline-dark">home</button>
                        </Link>
                        <Link to="/research">
                            <button className="btn btn-outline-dark">self-research</button>
                        </Link>
                        <div hidden={this.state.session}>
                            <Link className="" to="/login">
                                <button className="btn btn-outline-primary">Log in</button>
                            </Link>
                        </div>
                        <div hidden={this.state.session}>
                            <Link to="/register">
                                <button className="btn btn-outline-primary">Sign up</button>
                            </Link>
                        </div>
                    </form>

                </div>
                <h1>Sign In</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   placeholder="Alice"
                                   value={this.state.user.username}
                                   onChange={(e) => this.setState({
                                       user: {
                                           ...this.state.user,
                                           username:e.target.value
                                       }
                                   })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                   id="password" placeholder="123qwe#$%"
                                   value={this.state.user.password}
                                   onChange={(e) => this.setState({
                                       user: {
                                           ...this.state.user,
                                           password:e.target.value
                                       }
                                   })}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10"></div>
                        <div class="pull-right col-2">
                            <select className="custom-select" id="inputGroupSelect01"
                                    onChange={(e) => {
                                        const newType = e.target.value
                                        console.log(e.target.value)
                                        this.setState(prevState => ({
                                            usertype:newType
                                        }))
                                    }}
                                    value={this.state.usertype}

                            >
                                <option selected value="1">User</option>
                                <option value="2" >Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link to="/home">
                            <button
                                className="btn btn-primary btn-block wbdv-button wbdv-login"
                                onClick={() => {
                                    if(this.state.usertype=="1")
                                        this.handleLogin(this.state.user)
                                    else
                                        this.AdminLogin(this.state.user)
                                    //this.props.history.push("/search")
                                }
                                }>
                                Sign In
                            </button>
                            </Link>
                            <div className="row">
                                <div className="col-6">
                                    <a className="wbdv-link wbdv-forgot-password" href="#">Forgot Password?</a>
                                </div>
                                <div className="col-6">
                                    <Link to="/register">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPageClient