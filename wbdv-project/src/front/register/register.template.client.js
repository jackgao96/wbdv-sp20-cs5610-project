import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class RegisterPageClient extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Sign Up</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                id="usernameFld" placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                id="passwordFld" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Verify Password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-password-verify"
                                id="verifyPasswordFld" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block wbdv-button wbdv-register"
                                onClick={()=>{this.props.history.push("/")}}>
                                Sign Up
                            </button>
                            <div className="row">
                                <div className="col-6">
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