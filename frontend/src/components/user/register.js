// Client / Components / User / Register

import React from 'react';
import { connect } from 'react-redux';

import { validateUserRegister } from '../../../shared/validations/user/register';
import { userRegisterRequest } from '../../actions/user/register';
import { flashMessageAdd } from '../../actions/flash-messages';
import InputText from '../common/inputs/text';

class UserRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid() {
        const { errors, isValid } = validateUserRegister(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.isValid()) {
            this.setState({errors: {}, isLoading: true});

            this.props.userRegisterRequest(this.state).then(
                (response) => {
                    console.log(response.data);

                    this.props.flashMessageAdd({
                        type: 'success',
                        text: 'You have registered successfully.'
                    });

                    this.setState({isLoading: false});

                    this.context.router.push('/login');
                },

                (error) => {
                    console.log(error.response.data);

                    this.setState({errors: error.response.data.errors, isLoading: false});
                }
            );
        }
    }

    render() {
        return (
            <section>
                <h2>Register</h2>

                <form onSubmit={ this.onSubmit.bind(this) }>

                    <InputText
                        error={ this.state.errors.username }
                        type="text"
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                        name="username"
                        id="user-username"
                        label="Username"
                        placeholder="Eg: jonsnow"
                    />

                    <InputText
                        error={ this.state.errors.password }
                        type="password"
                        value={ this.state.password }
                        onChange={ this.onChange.bind(this) }
                        name="password"
                        id="user-password"
                        label="Password"
                        placeholder="Password"
                    />

                    <button type="submit" disabled={ this.state.isLoading } className="btn btn-default">Submit</button>
                </form>
            </section>
        );
    }
}

UserRegister.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired
};

UserRegister.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect((state) => { return {} }, { userRegisterRequest, flashMessageAdd })(UserRegister);