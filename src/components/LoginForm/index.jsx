import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {login: "",password: "", remember:false}

        this.state = this.initialState;
        
    }

        handleChange = (event) => {
            const {
                target:{ type, value, cheked, name},} = 
                event;
            const calcValue = type ==="checkbox" ? cheked: value;
          
            this.setState(
                {
                    [name]:calcValue,
                }
            );

        };

        handleReset = () => {
            this.setState(this.initialState)
        }

        handleSubmit = (event) => {
            event.preventDefault()
            this.handleReset()
        };

    
    render() {
        return (
            <form 
            onReset={this.handleReset}
            onSubmit={this.handleSubmit}
            method="POST"
            >
                <div>
                <label htmlFor="unique">Login:</label>
                    
                <input 
                type="text" 
                name="login" 
                id="unique" 
                value={this.state.login}
                onChange={this.handleChange}
                />
                </div>
                <div>
                <label htmlFor="pass">Password:</label>
                <input type="password" 
                name="password"
                id="pass"
                value={this.state.password}
                onChange={this.handleChange} 
                />
                </div>
                <div>
                    <label htmlFor="">Remember Me</label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <input type="checkbox"
                            name="remember"
                            checked={this.state.remember} />
                            </label>
                            </div>
               <div>
                <input type="submit" />
                <input type="reset" />
                </div>
            </form>
        );
    }
}

export default LoginForm;
