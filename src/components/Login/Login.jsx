import React from 'react'
import style from './Login.module.css'
import {Field, reduxForm} from 'redux-form'


const LoginForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit} className={style.login__form}>
        <div>
            <Field className={style.form__input} placeholder='Email' type='text' component='input' name='email' />
        </div>
        <div><Field className={style.form__input} placeholder='Password' component='input' name='password'
            type={'password'} />
        </div>
        <div className={style.footer}>
            <div className={style.checkbox}>
                <label className={style.container} htmlFor='checkbox'>remember me
                    <Field id='checkbox' type='checkbox' component='input' name='rememberMe' />
                    <span className={style.checkmark} />
                </label>
            </div>
            <button className='formBtn'>Log in</button>
        </div>
    </form>
);

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.title}>Login</div>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
};

export default Login;
