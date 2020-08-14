import React from 'react';

import {PasswordForgetForm} from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import {AuthUserContext, withAuthorization} from '../Session';
import {Card} from '@material-ui/core';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {(authUser: any) => (
            <>
                <Card style={{margin: '5vh', padding: '25px', height: '80vh'}}>
                    <h1>Account</h1>
                    <h2>{authUser.email}</h2>
                    <PasswordForgetForm/>
                    <PasswordChangeForm/>
                </Card>
            </>
        )}
    </AuthUserContext.Consumer>
);

const condition = (authUser: any) => !!authUser;

export default withAuthorization(condition)(AccountPage);