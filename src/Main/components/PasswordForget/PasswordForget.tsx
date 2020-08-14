import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Firebase, { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Button, FormControl, Input, InputLabel, FormHelperText} from '@material-ui/core';

const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

interface State {
    email: string;
    error: any;
}

interface Props {
    firebase: Firebase;
}

class PasswordForgetFormBase extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event: any) => {
        const { email } = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <FormControl style={{display: 'flex', flexDirection: 'column', width: '40%', marginLeft: '25px'}}>
                <h2>Reset Password</h2>
                <Input id="reset-email"
                       name="email"
                       value={this.state.email}
                       onChange={this.onChange}
                       type="text"
                       placeholder="Email Address"
                />

                <Button
                    style={{width: '200px', marginTop: '20px'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                    disabled={isInvalid}
                >
                    Reset
                </Button>

                {error && <p>{error.message}</p>}
            </FormControl>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };