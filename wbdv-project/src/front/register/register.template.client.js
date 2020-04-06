import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class RegisterPageClient extends React.Component {
    state = {
        username: '',
        password: '',
        verifiPassword: '',
        email:''
    }
    register = (user) =>
        fetch('https://infinite-retreat-10652.herokuapp.com/api/users',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        })

    render() {
        return (
            <div className="container">
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
                                        this.props.history.push('/home')
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