import React from 'react';
import logo from './logo.svg';
import HomePageClient from "./front/homepage/HomePageClient"
import './App.css';
import Category1Component from "./front/category/category1.template.client";
import LandingPageContainer from "./front/landing/landing.template.client";

function App() {
  return (
    <div className="App">
    <LandingPageContainer/>
    </div>
  );
}

export default App;
