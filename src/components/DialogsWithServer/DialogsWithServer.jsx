import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';

import style from './Dialogs.module.css';
import defaultAvatar from '../../assets/avatars/common.jpg';

import {sendMessage, getInitDialogs} from '../../actions/dialogsServerActions';
import Spinner from '../common/Spinner';
import {A} from 'hookrouter';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const DialogsWithServer = ({getInitDialogs, dialogs, messages, sendMessage, isLoading, id, currentId}) => {
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        getInitDialogs(id);
    }, [getInitDialogs, id]);

    const onSendMessage = () => {
        sendMessage(id, message);
        setMessage('');
    };

    const onKeyDownHandler = e => {
        if(e.key === 'Enter') onSendMessage();
    };

    console.log(dialogs)

    const users = dialogs.map(d => (
        <div key={d.id}>
            <A className={currentId == d.id ? style.user + ' ' + style.active : style.user}
                href={`/dialogsServer/${d.id}`}>
                <div className={style.userHeader}>
                    <div>
                        <img src={d.photos.small || defaultAvatar} alt='user avatar' />
                    </div>
                    <div className={style.userActivityDate}>{formatDistanceToNow(new Date(d.lastUserActivityDate),
                        {addSuffix: true})}
                    </div>
                </div>
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
                            <button disabled={!message.length} className={style.sendButton} onClick={onSendMessage}>
                                Send
                            </button>
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
    isLoading: state.dialogsServer.isLoading,
    currentId: state.dialogsServer.currentId
});
 
export default connect(mapStateToProps, {sendMessage, getInitDialogs})(DialogsWithServer);
