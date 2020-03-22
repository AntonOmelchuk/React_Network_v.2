import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import style from './Login.module.css';
import { maxLength, required } from '../../utils/validators/validators';
import { Email, Password } from '../common/FormControl/FormControl';
import { login } from '../../actions/authActions';
import { AppStateType } from "../../reducers";

const requiredEmail = required('Email');
const requiredPassword = required('password');
const passwordMaxLength = maxLength(18);
const emailMaxLength = maxLength(30);

const LoginForm: React.FC<any> = ({ handleSubmit, reset }) => {
  const onSubmit = (e: React.SyntheticEvent) => {
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
          maxLength='30'
        />
      </div>
      <div>
        <Field
          className={style.form__input}
          placeholder='Password'
          component={Password}
          name='password'
          type='password'
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

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

type formDataType = {
  email: string,
  password: string,
  rememberMe: boolean
}

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

type PropsType = MapDispatchToPropsType

const Login: React.FC<PropsType> = ({ login }): any => {
  const onSubmit = (formData: formDataType): void => {
    const { email, password, rememberMe } = formData;

    login(email, password, rememberMe);
  };

  return (
    <div className={style.wrapper}>
      <p className={style.credential}>Credentials for testing</p>
      <p className={style.credential}>Email: free@samuraijs.com</p>
      <p className={style.credential}>Password: free</p>
      <div className={style.title}>Login</div>
      <LoginFormRedux
        // @ts-ignore
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default connect<null,
  MapDispatchToPropsType,
  null,
  AppStateType>
(null, { login })(Login);
