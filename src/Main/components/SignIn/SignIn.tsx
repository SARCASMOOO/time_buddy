import React, {ChangeEvent, Component, FormEvent} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {SignUpLink} from '../SignUp/SignUp';
import {PasswordForgetForm, PasswordForgetLink} from '../PasswordForget/PasswordForget';

import Firebase, {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Button, Card, FormControl, Input} from "@material-ui/core";
import PasswordChangeForm from "../PasswordChange/PasswordChange";

const SignInPage = () => (

        <Card style={{margin: '5vh', padding: '25px', height: '80vh',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Sign In</h1>
            <SignInForm/>
        </Card>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

interface State {
    email: string;
    password: string;
    error: any;
}

interface Props {
    firebase: Firebase;
    password: string;
    history: any;
}

class SignInFormBase extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event: React.FormEvent) => {
        const {email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = (event: React.ChangeEvent) => {
        // @ts-ignore
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <FormControl
                style={{display: 'flex', flexDirection: 'column', width: '40%', marginLeft: '25px', marginTop: '50px'}}>
                <Input id="user-email"
                       name="email"
                       value={email}
                       onChange={this.onChange}
                       type="text"
                       placeholder="Email Address"
                />

                <Input id="user-password"
                       name="password"
                       value={password}
                       onChange={this.onChange}
                       type="password"
                       placeholder="Password"
                       style={{marginTop: '25px'}}
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
                    Sign In
                </Button>


                <PasswordForgetLink/>
                <SignUpLink/>
                {error && <p>{error.message}</p>}
            </FormControl>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export {SignInForm};


