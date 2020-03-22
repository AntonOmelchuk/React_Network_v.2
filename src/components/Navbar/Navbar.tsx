import React, { ReactElement } from "react";
import style from './Navbar.module.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { AppStateType } from '../../reducers';

type MapStateToPropsType = {
  auth: boolean;
  login: string | null;
};

type MapDispatchToPropsType = {
  logout: () => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const Navbar: React.FC<PropsType> = ({ auth, login, logout }) => (
  <div className={style.navbar}>
    <div className={style.container}>
      <h3 className={style.title}>Developers Network</h3>
    </div>
    <div className={style.login}>
      <div>
        {auth && (
          <span>
            {login}{' '}
            <i className='fas fa-sign-out-alt' onClick={() => logout()} />
          </span>
        )}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  auth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  null,
  AppStateType
>(mapStateToProps, { logout })(Navbar);
