import React from 'react';
import User from './components/User/User';
import CurrentDialog from './components/Dialogs/CurrentDialog';
import Login from './components/Login/Login';
import Loading from './components/common/Loading';
import DialogsWithServer from './components/DialogsWithServer/DialogsWithServer';

const Users = React.lazy(() => import ('./components/Users/Users'));
const Dialogs = React.lazy(() => import ('./components/Dialogs/Dialogs'));

const Routes = {
    '/': () => <User />,
    '/profile/:id?': ({id}) => <User id={id} />,
    '/dialogs': () => <React.Suspense fallback={<Loading />}>
        <Dialogs />
    </React.Suspense>,
    '/dialogs/:id': ({id}) => <CurrentDialog id={id} />,
    '/dialogsServer': () => <React.Suspense fallback={<Loading />}>
        <DialogsWithServer />
    </React.Suspense>,
    '/users': () => <React.Suspense fallback={<Loading />}>
        <Users />
    </React.Suspense>,
    '/login': () => <Login/>
};

export default Routes;
