import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: 'test@test.com',
            password: "monPassw0rd",
            passwordBis: "monPassw0rd",
            name: "James",
            lastname: "Bond"
         };

        this.updateEmailField = this.updateEmailField.bind(this);
        this.updatePasswordField = this.updatePasswordField.bind(this);
        this.updatepasswordBisField = this.updatepasswordBisField.bind(this);
        this.updateNameField = this.updateNameField.bind(this);
        this.updateLastNameField = this.updateLastNameField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateEmailField(event) {
        this.setState({ 
            email: event.target.value,
         });
    }
    updatePasswordField(event){
        this.setState({
            password: event.target.value
        });
    }
    updatepasswordBisField(event) {
        this.setState({
            passwordBis: event.target.value
        });
    }
    updateNameField(event){
        this.setState({
            name: event.target.value
        })
    }
    updateLastNameField(event) {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit(event) {
        alert(JSON.stringify(this.state, 1, 1));
        console.log(JSON.stringify(this.state, 1, 1))
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>{JSON.stringify(this.state,1,1)}</h1>
                    <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField} />
                    <input type="password" name="password" value={this.state.password} onChange={this.updatePasswordField} />
                    <input type="password" name="passwordBis" value={this.state.password} onChange={this.updatepasswordBisField} />
                    <input type="text" name="name" value={this.state.name} onChange={this.updateNameField} />
                    <input type="text" name="lastName" value={this.state.lastname} onChange={this.updateLastNameField} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SignUp;