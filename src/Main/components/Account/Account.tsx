import React from 'react';

import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {(authUser:any) => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = (authUser: any) => !!authUser;

export default withAuthorization(condition)(AccountPage);