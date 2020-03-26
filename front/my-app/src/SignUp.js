import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { email: 'test@test.com' };

        this.updateEmailField = this.updateEmailField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateEmailField(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>Bienvenid@ , {this.state.email}</h1>
                    <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SignUp;