import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import style from './Dialogs.module.css';

import {sendMessage, getInitDialogs, getMessages} from '../../actions/dialogsActions';
import Spinner from '../common/Spinner';
import DialogsUsers from './DialogsUsers';
import DialogsMessages from './DialogsMessages';

const Dialogs = ({getInitDialogs, getMessages, dialogs, messages, sendMessage, isLoading, id, currentId}) => {

    useEffect(() => {
        getInitDialogs(id);
    }, []);

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
                <DialogsUsers dialogs={dialogs} currentId={currentId} getMessages={getMessages} />
                <DialogsMessages messages={messages} sendMessage={sendMessage} id={id} />
            </div>
        );
    }
};

const mapStateToProps = ({dialogs}) => ({
    dialogs: dialogs.dialogs,
    messages: dialogs.messages,
    isLoading: dialogs.isLoading,
    currentId: dialogs.currentId
});
 
export default connect(mapStateToProps, {sendMessage, getInitDialogs, getMessages})(Dialogs);
