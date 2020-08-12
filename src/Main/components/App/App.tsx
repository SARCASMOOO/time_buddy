import React from 'react';
import './App.css';

// Components
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";

// Constants
import * as ROUTES from '../../constants/routes';

const App = () => <Layout>
    <Router>
        <Navigation/>
        <main>
            <Switch>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                <Route path={ROUTES.HOME} component={HomePage}/>
                <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                <Route path={ROUTES.ADMIN} component={AdminPage}/>
            </Switch>
        </main>
        <footer>This is the footer</footer>
    </Router>
</Layout>;

export default App;
