import React from 'react';
import User from './components/User/User';
import Login from './components/Login/Login';
import Loading from './components/common/Loading';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const Users = React.lazy(() => import ('./components/Users/Users'));

const Routes = {
    '/': () => <User />,
    '/profile/:id?': ({id}) => <User id={id} />,
    '/dialogs': () => <DialogsContainer />,
    '/dialogs/:id': ({id}) => <DialogsContainer id={id} />,
    '/users': () => <React.Suspense fallback={<Loading />}>
        <Users />
    </React.Suspense>,
    '/login': () => <Login/>
};

export default Routes;
