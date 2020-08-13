import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Firebase, { FirebaseContext, withFirebase } from '../Firebase';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

interface Props {
    firebase: Firebase;
    history: any;
}


// TODO: Figure out how to have event.target.name as an item in the state interface.
interface State {
    username: string;
    email: string;
    passwordOne: string;
    error: any;
}

class SignUpFormBase extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    // TODO: Figure out what type an event should be.
    onSubmit = (event: any) => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser: any) => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then((authUser: any) => {
                this.props.history.push(ROUTES.HOME);
                this.setState({ ...INITIAL_STATE });
            })
            .catch((error: any) => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        // @ts-ignore
        const {username, email, passwordOne, passwordTwo, error} = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (<p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>);

const SignUpForm = compose<Props, any>(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export {SignUpForm, SignUpLink};