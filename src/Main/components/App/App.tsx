import React from 'react';
import './App.css';

// Components
import {BrowserRouter as Router} from 'react-router-dom';

import Layout from "../Layout/Layout";
import Navigation from "../NavBar/Navigation";

const App = () => <Layout>
    <Router>
        <Navigation/>
        <div style={{backgroundColor: "blue"}}>Test 2</div>
        <div style={{backgroundColor: "cyan"}}>Test 3</div>
    </Router>
</Layout>;

export default App;
