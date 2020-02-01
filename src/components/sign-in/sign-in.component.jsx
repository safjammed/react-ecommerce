import React, { Component } from 'react';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit =  (event) =>{
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value });
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin With your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='Email'
                        required
                    />                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        label='Password'
                        value={this.state.password} 
                        required
                    />
                    <CustomButton type="submit">Submit Form</CustomButton> 
                    <CustomButton onClick={signInWithGoogle}> Sign In with Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;