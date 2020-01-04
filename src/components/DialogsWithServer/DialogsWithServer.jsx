import React, {useEffect, useState} from 'react';
import style from './Dialogs.module.css';

import {connect} from 'react-redux';
import {sendMessage, getDialogs, getMessages} from '../../actions/dialogsServerActions';
import Spinner from '../common/Spinner';

const DialogsWithServer = ({dialogs, messages, sendMessage, getDialogs, isLoading, getMessages}) => {
    useEffect(() => {
        getDialogs();
        getMessages(2);
    }, [getDialogs, getMessages]);

    const [message, setMessage] = useState('');

    const onSendMessage = () => {
        sendMessage(11, message);
    };
    
    const users = dialogs.map(d => (
        <div className={style.user} key={d.id}>
            <img src={d.photos.small} alt='user avatar' />
            <div>{d.userName}</div>
        </div>
    ));

    const currentDilaogMessages = messages ? messages.map(m => (
        <div key={m.id}>{m.body}</div>
    )) : <h3>No messages</h3>;

    console.log(dialogs);

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
                    <div>{currentDilaogMessages}</div>
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
