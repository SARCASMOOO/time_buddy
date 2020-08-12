import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Firebase, { FirebaseContext } from '../Firebase';
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
        <FirebaseContext.Consumer>
            {(firebase?: Firebase) => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

interface Props {
    firebase?: Firebase;
}

class SignUpForm extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    // TODO: Figure out what type an event should be.
    onSubmit = (event: any) => {
        // @ts-ignore
        const { username, email, passwordOne } = this.state;

        // @ts-ignore
        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser: any) => {
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

export default SignUpPage;

export {SignUpForm, SignUpLink};