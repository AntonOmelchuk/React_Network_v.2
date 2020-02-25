import React from 'react';
import {connect} from 'react-redux';
import {logout, setAuth} from '../../actions/authActions';
import {AppStateType} from '../../reducers'
import style from './Navbar.module.css';

type MapStatePropsType = {
  auth: boolean,
  login: number | null
}

type MapDispatchPropsType = {
  setAuth: () => void,
  logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Navbar: React.FC<PropsType> = ({auth, login, logout}) => (
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
);

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    auth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuth, logout})(Navbar);
