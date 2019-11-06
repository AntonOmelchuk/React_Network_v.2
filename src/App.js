import React from 'react';
import {useRoutes} from 'hookrouter'
import 'antd/dist/antd.css'
import style from './index.module.css';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav/Nav';
import User from './components/User/User';
import Routes from './router';

const App = () => {

    const routeResult = useRoutes(Routes);

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

export default App;
