import React, { Component } from 'react';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends Component {
    constructor(){
        super();        
        this.state={
            email: '',
            password: ''
        }   
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password}= this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
            
        } catch (error) {
            console.error(error);
        }
        
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
                    <div className="buttons">
                        <CustomButton type="submit">Submit Form</CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;