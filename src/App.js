import React from 'react';
import {Route, Switch} from 'react-router-dom';
import style from './index.module.css';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav/Nav';
import User from './components/User/User';
import Dialogs from './components/Dialogs/Dialogs';
import CurrentDialog from './components/Dialogs/CurrentDialog';
import Users from './components/Users/Users';

const App = () => (
    <div className={style.page}>
        <Navbar />
        <Nav />
        <div className={style.content}>
            <div>
                <Switch>
                    <Route exact path='/' component={User} />
                    <Route exact path='/dialogs' component={Dialogs} />
                    <Route exact path='/dialogs/:id' component={CurrentDialog} />
                    <Route exact path='/users' component={Users} />
                </Switch>
            </div>
        </div>
    </div>
);

export default App;
