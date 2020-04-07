import React from 'react';
import HomePageClient from '../front/homepage/HomePageClient';
import SearchTemplateClient from '../front/search/search.template.client'
import LoginPageClient from '../front/login/login.template.client'
import RegisterPageClient from '../front/register/register.template.client'

/*
import Category1Component from '../front/category/category1.template.client'
import Category2Component from '../front/category/category2.template.client'
import Category3Component from '../front/category/category3.template.client'
import Category4Component from '../front/category/category4.template.client'
import Category5Component from '../front/category/category5.template.client'
import Category6Component from '../front/category/category6.template.client'
*/
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LandingPageContainer from "../front/landing/landing.template.client";


class LoadContainer extends React.Component{
    render(){
        return (
            <Router>
                <Route
                    path="/"
                    exact={true}
                    render={()=>
                        <LandingPageContainer/>
                    }/>
                <Route
                    path="/research"
                    exact={true}
                    render={(props)=><SearchTemplateClient
                        {...props}
                    />}
                />
                <Route
                    path="/login"
                    exact={true}
                    render={(props)=><LoginPageClient
                                    {...props}
                                    />}
                />
                <Route
                    path="/register"
                    exact={true}
                    render={(props)=><RegisterPageClient
                                    {...props}/>}
                />
                <Route
                    path="/home"
                    exact={true}
                    render={()=>
                        <HomePageClient/>
                    }/>
                {/*
                <Route
                    path="/c1"
                    exact={true}
                    render={()=><Category1Component/>}
                />
                <Route
                    path="/c2"
                    exact={true}
                    render={()=><Category2Component/>}
                />
                <Route
                    path="/c3"
                    exact={true}
                    render={()=><Category3Component/>}
                />
                <Route
                    path="/c4"
                    exact={true}
                    render={()=><Category4Component/>}
                />
                <Route
                    path="/c5"
                    exact={true}
                    render={()=><Category5Component/>}
                />
                <Route
                    path="/c6"
                    exact={true}
                    render={()=><Category6Component/>}
                />
                */}

            </Router>
            
        )
    }
}

export default LoadContainer
