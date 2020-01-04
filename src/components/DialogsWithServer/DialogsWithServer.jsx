import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import style from './Dialogs.module.css';
import defaultAvatar from '../../assets/avatars/common.jpg';

import {sendMessage, getDialogs, getMessages} from '../../actions/dialogsServerActions';
import Spinner from '../common/Spinner';

const DialogsWithServer = ({dialogs, messages, sendMessage, getDialogs, isLoading, getMessages}) => {
    const [currentDialog, setCurrentDialog] = useState(0);
    const [message, setMessage] = useState('');

    console.log(messages);

    useEffect(() => {
        getDialogs();
        getMessages(currentDialog);
    }, [currentDialog]);

    const onSendMessage = () => {
        sendMessage(currentDialog, message);
    };
    
    const users = dialogs.map(d => (
        <div className={style.user} key={d.id} onClick={() => setCurrentDialog(d.id)}>
            <img src={d.photos.small || defaultAvatar} alt='user avatar' />
            <div>{d.userName}</div>
        </div>
    ));

    const currentDialogMessages = messages ? messages.map(m => (
        <div key={m.id}>
            <div className={style.senderInfo}>
                <div className={style.sender}>{m.senderName}</div>
                <div className={style.time}>{m.addedAt.slice(11, 16)}</div>
            </div>
            <div>{m.body}</div>
        </div>
    )) : <h3>No messages</h3>;

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
                <div className={style.users}>{users}</div>
                <div>
                    <div>{currentDialogMessages}</div>
                    <input type='text' onChange={e => setMessage(e.target.value)} value={message} />
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    dialogs: state.dialogsServer.dialogs,
    messages: state.dialogsServer.messages,
    isLoading: state.dialogsServer.isLoading
});
 
export default connect(mapStateToProps, {sendMessage, getDialogs, getMessages})(DialogsWithServer);
