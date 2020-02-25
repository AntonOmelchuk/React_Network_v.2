import React, {FormEvent} from 'react'
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {maxLength, required} from '../../utils/validators/validators';
import {Email, Password} from '../common/FormControl/FormControl';
import {login} from '../../actions/authActions';
import style from './Login.module.css';

const requiredEmail = required('Email');
const requiredPassword = required('password');
const passwordMaxLength = maxLength(18);
const emailMaxLength = maxLength(30);

type OwnPropsType = {
  handleSubmit: () => void,
  reset: () => void
}

type MapDispatchPropsType = {
  login: (email: string, password: number, rememberMe: boolean) => void
}

type PropsType = MapDispatchPropsType & OwnPropsType

const LoginForm: React.FC<PropsType> = ({handleSubmit, reset}) => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
        reset();
    };

    return (
        <form onSubmit={onSubmit} className={style.login__form}>
            <div>
                <Field
                    className={style.form__input}
                    placeholder='Email'
                    type='email'
                    component={Email}
                    name='email'
                    validate={[requiredEmail, emailMaxLength]}
                    maxLength={'30'}
                />
            </div>
            <div>
                <Field
                    className={style.form__input}
                    placeholder='Password'
                    component={Password}
                    name='password'
                    type={'password'}
                    validate={[requiredPassword, passwordMaxLength]}
                    minLength='4'
                    maxLength='18'
                    autoComplete='on'
                />
            </div>
            <div className={style.footer}>
                <div className={style.checkbox}>
                    <label className={style.container} htmlFor='checkbox'>
            remember me
                        <Field
                            id='checkbox'
                            type='checkbox'
                            component='input'
                            name='rememberMe'
                        />
                        <span className={style.checkmark} />
                    </label>
                </div>
                <button>Log in</button>
            </div>
        </form>
    );
};

// @ts-ignore
const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

const Login: React.FC<MapDispatchPropsType> = ({login}) => {
    const onSubmit = (formData: any) => {
        const {email, password, rememberMe} = formData;

        login(email, password, rememberMe);
    };

    return (
        <div className={style.wrapper}>
            <p className={style.credential}>Credentials for testing</p>
            <p className={style.credential}>Email: free@samuraijs.com</p>
            <p className={style.credential}>Password: free</p>
            <div className={style.title}>Login</div>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    );
};

export default connect(null, {login})(Login);
