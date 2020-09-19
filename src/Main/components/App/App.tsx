import React, {Component} from 'react';
import './App.module.scss';

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
import withAuthentication from "../Session/withAuthentication";
import {UniWrapper} from "../Navigation/SelectSchool/globalState";

// Styles
import classes from './App.module.scss';

class App extends Component<{}, {}> {
    render() {
        return (
            <UniWrapper>
                <Layout>
                    <Router>
                        <Navigation/>
                        <main>
                            <LandingPage/>
                        </main>
                        {/*<main>*/}
                        {/*    <Switch>*/}
                        {/*        <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>*/}
                        {/*        <Route path={ROUTES.SIGN_IN} component={SignInPage}/>*/}
                        {/*        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>*/}
                        {/*        <Route path={ROUTES.HOME} component={HomePage}/>*/}
                        {/*        <Route path={ROUTES.ACCOUNT} component={AccountPage}/>*/}
                        {/*        <Route path={ROUTES.ADMIN} component={AdminPage}/>*/}
                        {/*        <Route path={ROUTES.LANDING} component={LandingPage}/>*/}
                        {/*    </Switch>*/}
                        {/*</main>*/}
                        {/*<footer style={{backgroundColor: '#02baa8'}} />*/}
                    </Router>
                </Layout>
            </UniWrapper>
        );
    }
}

export default withAuthentication(App);
