import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'hookrouter';
import Routes from './router';

import Spinner from './components/common/waitingComponents/Spinner';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav/Nav';
import User from './components/User/User';
import Login from './components/Login/Login';
import DialogModal from './components/common/modalWindows/DialogModal/DialogModal';
import SendMessageSuccessModal from './components/common/modalWindows/sendMessageSuccess/SendMessageSuccessModal';

import { store } from './store/store';
import { AppStateType } from './reducers';
import { sendMessage, toggleShowModal } from './actions/dialogsActions';
import { getAuth } from './selectors/profileSelectors';
import { initializeApp } from './actions/appActions';

import style from './index.module.css';

type MapStateToPropsType = {
  initialized: boolean,
  auth: boolean,
  showModal: boolean,
  sendMessageModal: boolean,
  user: NewDialogUserType
};

type MapDispatchToPropsType = {
  initializeApp: () => void,
  sendMessage: (userId: number, message: string, fromModal: boolean) => void,
  toggleShowModal: () => void
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const App: React.FC<PropsType> = ({
  initialized,
  initializeApp,
  auth,
  user,
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
      {showModal && (
        <DialogModal
          toggleShowModal={toggleShowModal}
          sendMessage={sendMessage}
          user={user}
        />
      )}
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

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.isInitialized,
  auth: getAuth(state),
  user: state.dialogs.currentUser,
  showModal: state.dialogs.showModal,
  sendMessageModal: state.dialogs.showSendMessageSuccessModal,
}) as MapStateToPropsType;

const AppContainer = connect(mapStateToProps, {
  initializeApp,
  toggleShowModal,
  sendMessage,
})(App);

export const AppMain = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);
