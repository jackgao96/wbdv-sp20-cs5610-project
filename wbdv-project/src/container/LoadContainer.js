import React from 'react';
import HomePageClient from '../front/homepage/HomePageClient';
import SearchTemplateClient from '../front/search/search.template.client'
import LoginPageClient from '../front/login/login.template.client'
import RegisterPageClient from '../front/register/register.template.client'

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LandingPageContainer from "../front/landing/landing.template.client";
import CategoryComponent from "../front/category/CategoryComponent";
import AdminComponent from "../front/admin/AdminComponent"
import SearchClientComponent from "../front/search/SearchClientComponent";


class LoadContainer extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    path="/"
                    exact={true}
                    component={LandingPageContainer}/>
                <Route
                    path="/research"
                    exact={true}
                    component={SearchTemplateClient
                        //props={this.props}
                    }/>
                <Route
                    path="/login"
                    exact={true}
                    component={LoginPageClient}/>
                <Route
                    path="/register"
                    exact={true}
                    component={RegisterPageClient}
                />
                <Route
                    path="/home"
                    exact={true}
                    component={HomePageClient}/>

                <Route
                    path="/category/:catName"
                    exact={true}
                    component={CategoryComponent}
                />
                <Route
                    path="/admin"
                    exact={true}
                    component={AdminComponent}
                />

            </Router>

        )
    }
}

export default LoadContainer
