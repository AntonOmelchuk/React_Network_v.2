import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Dialogs from './Dialogs';

import {selectCurrentId, selectDialogs, selectIsLoading, selectMessages} from '../../selectors/dialogsSelectors';
import {deleteMessages, getInitDialogs, getMessages, sendMessage} from '../../actions/dialogsActions';

type OwnPropsType = {
    id: number
}

type MapStatePropsType = {
    dialogs: [],
    messages: [],
    isLoading: boolean,
    currentId: number
}

type MapDispatchPropsType = {
    sendMessage: (userId: number, message: string, fromModal:boolean) => void,
    getInitDialogs: (id: number) => void,
    getMessages: (userId: number) => void,
    deleteMessages: (messages: Array<number>, userId: number) => void
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

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
        <Dialogs dialogs={dialogs}
                 // @ts-ignore
                 isLoading={isLoading}
                 currentId={currentId}
                 sendMessage={sendMessage} messages={messages}
                 getMessages={getMessages} deleteMessages={deleteMessages} />
    );
};

const mapStateToProps = createStructuredSelector({
    dialogs: selectDialogs,
    messages: selectMessages,
    isLoading: selectIsLoading,
    currentId: selectCurrentId
});

export default connect(mapStateToProps, {sendMessage, getInitDialogs, getMessages, deleteMessages})(DialogsContainer);
