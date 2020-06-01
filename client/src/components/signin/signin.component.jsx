import React, {useState} from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButtton/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux'

const SignIn = ({googleSignInStart, emailSignInStart}) =>  {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const { email, password } = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]:value})
    }

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)

    }
       
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                name='email' 
                type='email'
                handleChange={handleChange} 
                value={email} 
                label='email'
                required 
                />
                <FormInput 
                name='password' 
                type='password'
                label='password' 
                value={password} 
                handleChange={handleChange}
                required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})


export default connect(null,mapDispatchToProps)(SignIn);