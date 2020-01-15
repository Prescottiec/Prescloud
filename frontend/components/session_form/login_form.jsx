import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { username: 'Demo_User', password: '123456'};
        this.props.processForm(demoUser);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    
                    <div className="login-form">
                        <br />

                        <div className="user-pass">
                            <label className="login-form-username">Username
                                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                />
                            </label>
                            <br />
                            <label className="login-form-password">Password
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                />
                            </label>
                            <br />
                            <div className="login-form-errors">
                                {this.renderErrors()}
                            </div>
                        </div>

                        <div className="login-form-buttons">
                            <input className="login-submit" type="submit" value={this.props.formType} />
                            <button className="demo-user-button" onClick={this.handleDemo}>Demo User</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default LogInForm;