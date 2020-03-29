import React from 'react';
import logo from './logo.svg';
import LoadContainer from "./container/LoadContainer"
import SearchTemplateClient from "./front/search/search.template.client"
import LoginPageClient from "./front/login/login.template.client"
import './App.css';

function App() {
  return (
    <div className="App">
    <LoadContainer/>
    </div>
  );
}

export default App;
