import React, {useEffect} from 'react';
import {connect, Provider} from 'react-redux';
import {useRoutes} from 'hookrouter';

import style from './index.module.css';

import {getAuth} from './selectors/profileSelectors';
import {initializeApp} from './actions/appActions';
import {store} from './store/store';
import Routes from './router';

import Spinner from './components/common/Spinner';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav/Nav';
import User from './components/User/User';
import Login from './components/Login/Login';
import {BrowserRouter} from 'react-router-dom';

const App = ({initialized, initializeApp, auth}) => {

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    const routeResult = useRoutes(Routes);

    if(!initialized) return <Spinner />;
    if (!auth) return <Login />;

    return (
        <div className={style.page}>
            <Navbar />
            <Nav />
            <div className={style.content}>
                {routeResult || <User />}
            </div>
        </div>
    );

};

const mapStateToProps = state => ({
    initialized: state.app.isInitialized,
    auth: getAuth(state)
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

export const AppMain = () => <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</BrowserRouter>;




