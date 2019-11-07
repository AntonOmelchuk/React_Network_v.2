import React, {useEffect} from 'react';
import style from './Navbar.module.css';
import {connect} from 'react-redux';
import {logout, setAuth} from '../../actions/authActions';

const Navbar = ({setAuth, auth, login, logout}) => {
    useEffect(() => {
        setAuth()
    }, [login, auth]);

    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <h3 className={style.title}>Developers Network</h3>
            </div>
            <div className={style.login}>
                <div>{auth && <span>
                    {login}{' '}
                    <i className='fas fa-sign-out-alt' onClick={() => logout()} />
                </span>}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    auth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuth, logout})(Navbar);
