import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";

const App = () => <Layout>
    <div style={{backgroundColor: "green"}}>Test 1</div>
    <div style={{backgroundColor: "blue"}}>Test 2</div>
    <div style={{backgroundColor: "cyan"}}>Test 3</div>
</Layout>;

export default App;
