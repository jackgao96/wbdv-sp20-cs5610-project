import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ProfilePageClient extends React.Component{
    render() {
        return(
            <div className="container">
                <h2>Profile Page</h2>
                <Link to="/home">
                    Go back to homepage.
                </Link>
            </div>
        )
    }
}
export default ProfilePageClient