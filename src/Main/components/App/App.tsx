import React from 'react';
import './App.css';

// Components
import Layout from "../Layout/Layout";
import Navigation from "../NavBar/Navigation";

const App = () => <Layout>
    <Navigation />
    <div style={{backgroundColor: "blue"}}>Test 2</div>
    <div style={{backgroundColor: "cyan"}}>Test 3</div>
</Layout>;

export default App;
