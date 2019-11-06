import React, {useEffect} from 'react';
import style from './Navbar.module.css';
import {connect} from 'react-redux';
import {setAuth} from '../../actions/authActions';

const Navbar = ({setAuth, auth, login}) => {
    useEffect(() => {
        setAuth()
    }, [login, auth]);

    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <h3 className={style.title}>Developers Network</h3>
            </div>
            <div className={style.login}>
                <div>{auth ? login : 'Login'}</div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    auth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuth})(Navbar);
