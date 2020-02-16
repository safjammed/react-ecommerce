import React, { Component } from 'react';


import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils';
import Swal from 'sweetalert2';

class SignUp extends Component{
    constructor(){
        super();
        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    //handle form submission
    handleSubmit= async event => {
        //prevent browser automatic submission
        event.preventDefault();
        //decontruct the state where the values reside
        const {displayName, email, password, confirmPassword} = this.state;
        // validate password
        if(password !== confirmPassword){
            Swal.fire('Oops!', 'Passwords Dont match', 'error');            
            return;
        }

        try{
            // submit data to fire base
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            // save the user in the firestore database
            await createUserProfileDocument(user, {displayName});
            //set state to null so that the form resets
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            // Notify user of successful sign up
            Swal.fire('Sign Up Complete!', 'You can now log in', 'success');
        }catch(err){
            console.error(err);
        }

    }

    // universal input change handler
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className='title'> I do not have and account</h2>
                <span>Sign Up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        );
    }
}

export default SignUp;