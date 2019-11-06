import React from 'react';
import User from './components/User/User';
import Dialogs from './components/Dialogs/Dialogs';
import CurrentDialog from './components/Dialogs/CurrentDialog';
import Users from './components/Users/Users';
import Login from './components/Login/Login';

const Routes = {
    '/': () => <User />,
    '/profile/:id?': ({id}) => <User id={id} />,
    '/dialogs': () => <Dialogs />,
    '/dialogs/:id': ({id}) => <CurrentDialog id={id} />,
    '/users': () => <Users />,
    '/login': () => <Login />,
};
export default Routes;