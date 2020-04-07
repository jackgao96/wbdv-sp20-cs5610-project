import React from 'react';
import {Link} from 'react-router-dom';

class LoginPageCient extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleLogin = (user) => {
        fetch(`http://localhost:8080/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json()).then(currentUser => this.props.history.push('/home'))
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="container">
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
                                   id="password" placeholder="123qwe#$%"
                                   value={this.state.password}
                                   onChange={(e) => this.setState({
                                       password: e.target.value
                                   })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                className="btn btn-primary btn-block wbdv-button wbdv-login"
                                onClick={() =>
                                    this.handleLogin(this.state)
                                    //this.props.history.push("/search")
                                }>
                                Sign In
                            </button>
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

export default LoginPageCient