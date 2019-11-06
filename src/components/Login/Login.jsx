import React from 'react'
import {Field, reduxForm} from 'redux-form'


const LoginForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <div><Field className='formInput' placeholder='Email' component='input' name='email' /></div>
        <div><Field className='formInput' placeholder='Password' component='input' name='password'
            type={'password'} />
        </div>
        <div className='rememberMe'>
            <Field id='checkbox' type='checkbox' component='input'
                name='rememberMe' />
            <label id='label'  htmlFor='checkbox'>remember me</label>
        </div>
        <button className='formBtn'>Sign in</button>
    </form>
);

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className='loginForm'>
            <h3>Login</h3>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
};

export default Login;
