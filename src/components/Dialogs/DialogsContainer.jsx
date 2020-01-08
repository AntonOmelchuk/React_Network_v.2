import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentId, selectDialogs, selectIsLoading, selectMessages} from '../../selectors/dialogsSelectors';
import {getInitDialogs, getMessages, sendMessage} from '../../actions/dialogsActions';

import Dialogs from './Dialogs';

const DialogsContainer = ({
    getInitDialogs,
    getMessages,
    dialogs,
    messages,
    sendMessage,
    isLoading,
    currentId,
    id
}) => {
    useEffect(() => {
        getInitDialogs(id);
        document.title = 'Dialogs';
    }, [getInitDialogs, id]);

    return (
        <Dialogs dialogs={dialogs} isLoading={isLoading} currentId={currentId} sendMessage={sendMessage}
            messages={messages} getMessages={getMessages} />
    );
};

const mapStateToProps = createStructuredSelector({
    dialogs: selectDialogs,
    messages: selectMessages,
    isLoading: selectIsLoading,
    currentId: selectCurrentId
});

export default connect(mapStateToProps, {sendMessage, getInitDialogs, getMessages})(DialogsContainer);
