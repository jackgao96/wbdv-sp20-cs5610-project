import React, {Component} from 'react'
import {Link} from 'react-router-dom'
let date = new Date()
class RegisterPageClient extends React.Component {
    state = {
        username: '',
        password: '',
        verifiPassword: '',
        email:'',
        registertime:date
    }
    register = (user) => {
        if (this.state.password!=''&&this.state.password===this.state.verifiPassword){
            fetch('https://infinite-retreat-10652.herokuapp.com/api/users', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                },
                credentials: "include"
            })
            this.props.history.push('/home')
        }
        else{
            alert('You should verify your password!')
        }
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
                        <Link to="/watchlist">
                            <button className="btn btn-outline-dark">watch-list</button>
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
                        <div hidden={!this.state.session}>
                            <button className="btn btn-outline-primary" onClick={()=>this.logout()}>Log out</button>
                        </div>
                        <div hidden={!this.state.session}>
                            <Link to="/profile">
                                <button className="btn btn-outline-primary">Profile</button>
                            </Link>
                        </div>
                    </form>

                </div>
                <h1>Sign Up</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="usernameFld" placeholder="Alice"
                                   value={this.state.username}
                                   onChange={(e) => this.setState({
                                       username: e.target.value
                                   })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                   id="passwordFld" placeholder="123qwe#$%"
                                   value={this.state.password}
                                   onChange={(e) => this.setState({
                                       password: e.target.value
                                   })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Verify Password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-password-verify"
                                   type="password"
                                   id="verifyPasswordFld"
                                   value={this.state.verifiPassword}
                                   onChange={(e) => this.setState({
                                       verifiPassword: e.target.value
                                   })}
                                   placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Verify Password" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-password-verify"
                                   id="verifyPasswordFld"
                                   value={this.state.email}
                                   onChange={(e) => this.setState({
                                       email: e.target.value
                                   })}
                                   placeholder="alice@gmail.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block wbdv-button wbdv-register"
                                    onClick={() => {
                                        this.register(this.state)

                                    }}>
                                Sign Up
                            </button>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Link className="wbdv-link wbdv-login" to="/login">
                                        Login
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

export default RegisterPageClient