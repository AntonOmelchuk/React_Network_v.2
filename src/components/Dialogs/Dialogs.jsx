import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';

import style from './Dialogs.module.css';

import {sendMessage, getInitDialogs, getMessages} from '../../actions/dialogsActions';
import Spinner from '../common/Spinner';
import DialogsUsers from './DialogsUsers';
import DialogsMessages from './DialogsMessages';
import {createStructuredSelector} from 'reselect';
import {selectCurrentId, selectDialogs, selectIsLoading, selectMessages} from '../../selectors/dialogsSelectors';

const Dialogs = ({getInitDialogs, getMessages, dialogs, messages, sendMessage, isLoading, currentId, id}) => {

    useEffect(() => {
        getInitDialogs(id);
    }, []);

    const getMessagesCallback = useCallback(
        (id) => {
            getMessages(id);
        },
        [],
    );

    if(isLoading) {
        return (
            <div className={style.container}>
                {<Spinner />}
            </div>
        );
    } else {
        if(!dialogs) return 'No dialogs';
        return (
            <div className={style.container}>
                <DialogsUsers dialogs={dialogs} currentId={currentId} getMessages={getMessagesCallback} />
                <DialogsMessages messages={messages} sendMessage={sendMessage} currentId={currentId} />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    dialogs: selectDialogs,
    messages: selectMessages,
    isLoading: selectIsLoading,
    currentId: selectCurrentId
});
 
export default connect(mapStateToProps, {sendMessage, getInitDialogs, getMessages})(Dialogs);
