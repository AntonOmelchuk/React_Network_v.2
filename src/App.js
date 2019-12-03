import React, {useEffect} from 'react';
import {useRoutes} from 'hookrouter'
import style from './index.module.css';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav/Nav';
import User from './components/User/User';
import Routes from './router';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './actions/appActions';
import Spinner from './components/common/Spinner';
import {HashRouter} from 'react-router-dom';
import {store} from './store/store';

const App = ({initialized, initializeApp}) => {

    useEffect(() => {
        initializeApp()
    }, [initializeApp]);

    const routeResult = useRoutes(Routes);

    if(!initialized) return <Spinner />;

    return (
        <div className={style.page}>
            <Navbar />
            <Nav />
            <div className={style.content}>
                <div>
                    {routeResult || <User />}
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    initialized: state.app.isInitialized
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

export const AppMain = () => <HashRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</HashRouter>;



