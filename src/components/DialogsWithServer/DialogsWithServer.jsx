import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';

import style from './Dialogs.module.css';
import defaultAvatar from '../../assets/avatars/common.jpg';

import {sendMessage, getDialogs, getMessages} from '../../actions/dialogsServerActions';
import Spinner from '../common/Spinner';
import {A} from 'hookrouter';

const DialogsWithServer = ({dialogs, messages, sendMessage, getDialogs, isLoading, getMessages, id}) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        getDialogs();
        getMessages(id);
    }, [getDialogs, getMessages, id]);


    const onSendMessage = () => {
        sendMessage(id, message);
        setMessage('');
    };

    const onKeyDownHandler = e => {
        if(e.key === 'Enter') onSendMessage();
    };
    
    const users = dialogs.map(d => (
        <div key={d.id}>
            <A className={style.user} href={`/dialogsServer/${d.id}`}>
                <img src={d.photos.small || defaultAvatar} alt='user avatar' />
                <div>{d.userName}</div>
            </A>
        </div>
    ));

    const currentDialogMessages = messages.length ? messages.map(m => (
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
                <div className={style.messages}>
                    <div>{currentDialogMessages}</div>
                    <div>
                        <TextareaAutosize className={style.sendMessageTextarea} value={message}
                            onChange={e => setMessage(e.target.value)} onKeyDown={e => onKeyDownHandler(e)}
                            maxLength={360} />
                        <div className={style.sendButtonContainer}>
                            <button className={style.sendButton} onClick={onSendMessage}>Send</button>
                        </div>
                    </div>
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
