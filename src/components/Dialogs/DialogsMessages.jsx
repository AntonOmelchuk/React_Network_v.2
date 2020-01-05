import React, {useState} from 'react';
import style from './Dialogs.module.css';
import TextareaAutosize from 'react-autosize-textarea';

const DialogsMessages = React.memo(({messages, sendMessage, currentId}) => {
    const [message, setMessage] = useState('');

    const onSendMessage = () => {
        sendMessage(currentId, message);
        setMessage('');
    };

    const onKeyDownHandler = e => {
        if(e.key === 'Enter') onSendMessage();
    };

    const currentDialogMessages = messages.length ? messages.map(m => (
        <div key={m.id}>
            <div className={style.senderInfo}>
                <div className={style.sender}>{m.senderName}</div>
                <div className={style.time}>{m.addedAt.slice(11, 16)}</div>
            </div>
            <div>{m.body}</div>
        </div>
    )) : <h3>No messages</h3>;

    return (
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
    );
});

export default DialogsMessages;
