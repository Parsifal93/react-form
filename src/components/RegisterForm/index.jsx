import React, { Component } from 'react';

class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {login: "",password: "", remember:false, firstname:"", lastname:"", age:""}

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
                    <div>
                        <label htmlFor="fname">Firstname</label>
                        <input type="text"
                        name="firstname"
                        id="fname"
                        value={this.state.firstname} 
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="lname">Lastname</label>
                        <input type="text"
                        name="lastname"
                        id="lname"
                        value={this.state.lastname} 
                        onChange={this.handleChange}/></div>
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
                <div><label htmlFor="age">Age</label>
                <input type="number" 
                name="Age"
                id="age"
                value={this.state.age}
                onChange={this.handleChange}/>
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

export default RegisterForm;
