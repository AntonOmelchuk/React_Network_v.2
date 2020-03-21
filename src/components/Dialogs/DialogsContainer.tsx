import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentId,
  selectDialogs,
  selectIsLoading,
  selectMessages,
} from '../../selectors/dialogsSelectors';
import {
  deleteMessages,
  getInitDialogs,
  getMessages,
  sendMessage,
} from '../../actions/dialogsActions';

import { Dialogs } from './Dialogs';

type OwnPropsType = {
  id: number;
  getInitDialogs: (id: number) => void;
  getMessages: () => void;
  deleteMessages: () => void;
  sendMessage: () => void;
};

type MapStateToPropsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  currentId: number;
  isLoading: boolean;
};

type PropsType = OwnPropsType & MapStateToPropsType;

const DialogsContainer: React.FC<PropsType> = ({
  getInitDialogs,
  getMessages,
  deleteMessages,
  dialogs,
  messages,
  sendMessage,
  currentId,
  id,
  isLoading,
}) => {
  useEffect(() => {
    getInitDialogs(id);
    document.title = 'Dialogs';
  }, [getInitDialogs, id]);

  return (
    <Dialogs
      dialogs={dialogs}
      currentId={currentId}
      sendMessage={sendMessage}
      messages={messages}
      getMessages={getMessages}
      deleteMessages={deleteMessages}
      isLoading={isLoading}
    />
  );
};

// @ts-ignore
const mapStateToProps = createStructuredSelector({
  dialogs: selectDialogs,
  messages: selectMessages,
  isLoading: selectIsLoading,
  currentId: selectCurrentId,
});

export default connect<MapStateToPropsType>(mapStateToProps, {
  sendMessage,
  getInitDialogs,
  getMessages,
  deleteMessages,
})(DialogsContainer);
