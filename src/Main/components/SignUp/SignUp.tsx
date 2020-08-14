import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Firebase, {FirebaseContext, withFirebase} from '../Firebase';
import {compose} from 'recompose';
import * as ROUTES from '../../constants/routes';
import {Button, Card, FormControl, Input} from "@material-ui/core";
import {PasswordForgetLink} from "../PasswordForget/PasswordForget";
import {SignInForm} from "../SignIn/SignIn";

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const SignUpPage = () => (
    <div>
        <SignUpForm/>
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
        this.state = {...INITIAL_STATE};
    }

    // TODO: Figure out what type an event should be.
    onSubmit = (event: any) => {
        const {username, email, passwordOne} = this.state;

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
                this.setState({...INITIAL_STATE});
            })
            .catch((error: any) => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = (event: any) => {
        this.setState({[event.target.name]: event.target.value});
    };


    render() {
        // @ts-ignore
        const {username, email, passwordOne, passwordTwo, error} = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        return (
            <Card style={{margin: '5vh', padding: '25px', height: '80vh', display:'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h1>Sign Up</h1>
                <FormControl style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40%',
                    marginLeft: '25px',
                    marginTop: '50px'
                }}>
                    <Input id="username"
                           name="username"
                           value={username}
                           onChange={this.onChange}
                           type="text"
                           placeholder="Full Name"
                           style={{marginTop: '15px'}}
                    />

                    <Input id="email"
                           name="email"
                           value={email}
                           onChange={this.onChange}
                           type="text"
                           placeholder="Email Address"
                           style={{marginTop: '15px'}}
                    />

                    <Input id="passwordOne"
                           name="passwordOne"
                           value={passwordOne}
                           onChange={this.onChange}
                           type="password"
                           placeholder="Password"
                           style={{marginTop: '15px'}}
                    />

                    <Input id="passwordTwo"
                           name="passwordTwo"
                           value={passwordTwo}
                           onChange={this.onChange}
                           type="password"
                           placeholder="Confirm Password"
                           style={{marginTop: '15px'}}
                    />

                    <Button
                        style={{width: '200px', marginTop: '40px'}}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.onSubmit}
                        disabled={isInvalid}
                    >
                        Sign Up
                    </Button>

                    {error && <p>{error.message}</p>}
                </FormControl>
            </Card>
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