import React from 'react';
import {Link} from 'react-router-dom';

class LoginPageClient extends React.Component {
    state = {
        user:{username: '',
            password: ''},
        usertype:"1"
    }

    handleLogin = (user) => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => console.log(response.json())).then(currentUser => this.props.history.push('/home'))
         this.props.history.push('/home')
    }
    AdminLogin = (user) => {
        fetch(`https://infinite-retreat-10652.herokuapp.com/admin/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => console.log(response.json())).then(currentUser => this.props.history.push('/home'))
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