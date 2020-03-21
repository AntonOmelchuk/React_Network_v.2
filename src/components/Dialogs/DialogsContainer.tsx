import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentId, selectDialogs, selectIsLoading, selectMessages} from '../../selectors/dialogsSelectors';
import {deleteMessages, getInitDialogs, getMessages, sendMessage} from '../../actions/dialogsActions';

import {Dialogs} from './Dialogs';

type OwnPropsType = {
    id: number
    getInitDialogs: (id: number) => void
    getMessages: () => void
    deleteMessages: () => void
    sendMessage: () => void
}

type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isLoading: boolean
    currentId: number
}

type PropsType = OwnPropsType & MapStateToPropsType

const DialogsContainer: React.FC<PropsType> = ({
    getInitDialogs,
    getMessages,
    deleteMessages,
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
            messages={messages} getMessages={getMessages} deleteMessages={deleteMessages} />
    );
};

const mapStateToProps = createStructuredSelector({
    dialogs: selectDialogs,
    messages: selectMessages,
    isLoading: selectIsLoading,
    currentId: selectCurrentId
});

export default connect<MapStateToPropsType>(mapStateToProps, {sendMessage, getInitDialogs, getMessages, deleteMessages})(DialogsContainer);
