import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'hookrouter';

import style from './index.module.css';

import { getAuth } from './selectors/profileSelectors';
import { initializeApp } from './actions/appActions';
import { store } from './store/store';
import Routes from './router';

import Spinner from './components/common/waitingComponents/Spinner';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav/Nav';
import User from './components/User/User';
import Login from './components/Login/Login';
import DialogModal from './components/common/modalWindows/DialogModal/DialogModal';
import SendMessageSuccessModal from './components/common/modalWindows/sendMessageSuccess/SendMessageSuccessModal';
import { AppStateType } from './reducers';

type MapStateToPropsType = {
  initialized: boolean;
  auth: boolean;
  showModal: boolean;
  sendMessageModal: boolean;
};

type MapDispatchToPropsType = {
  initializeApp: () => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const App: React.FC<PropsType> = ({
  initialized,
  initializeApp,
  auth,
  showModal,
  sendMessageModal,
}) => {
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  // @ts-ignore
  const routeResult = useRoutes(Routes);

  if (!initialized) return <Spinner />;
  if (!auth) return <Login />;

  return (
    <div className={style.page}>
      <Navbar />
      <Nav />
      {showModal && <DialogModal />}
      {sendMessageModal && <SendMessageSuccessModal />}
      <div className={style.content}>
        {routeResult || (
          // @ts-ignore
          <User />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.isInitialized,
  auth: getAuth(state),
  showModal: state.dialogs.showModal,
  sendMessageModal: state.dialogs.showSendMessageSuccessModal,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

export const AppMain = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);
