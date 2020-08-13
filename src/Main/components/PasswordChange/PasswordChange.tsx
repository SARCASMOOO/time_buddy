import React, {Component} from 'react';

import Firebase, {withFirebase} from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

interface Props {
    firebase: Firebase;
}

interface State {
    passwordOne: string;
    passwordTwo: string;
    error: any;
}

class PasswordChangeForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event: any) => {
        const {passwordOne} = this.state;

        const promise = this.props.firebase.doPasswordUpdate(passwordOne);

        if (promise) {
            promise.then(() => {
                this.setState({...INITIAL_STATE});
            }).catch((error: any) => {
                this.setState({error});
            });
        }

        event.preventDefault();
    };

    onChange = (event: any) => {
        // @ts-ignore
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {passwordOne, passwordTwo, error} = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);