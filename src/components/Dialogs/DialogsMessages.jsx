import React, {useState} from 'react';
import style from './Dialogs.module.css';
import TextareaAutosize from 'react-autosize-textarea';

const DialogsMessages = React.memo(({messages, sendMessage, currentId, deleteMessages}) => {
    const [message, setMessage] = useState('');
    const [deleteMessagesId, setDeleteMessagesId] = useState([]);

    const addDeleteMessagesId = id => {
        if(deleteMessagesId.includes(id)) {
            const newDeleteMessages = deleteMessagesId.filter(mId => mId !== id);

            return setDeleteMessagesId(newDeleteMessages);
        }

        setDeleteMessagesId([...deleteMessagesId, id]);
    };

    const cancelDeleteMessages = () => setDeleteMessagesId([]);

    const onDeleteMessage = () => deleteMessages(deleteMessagesId, currentId);

    const onSendMessage = () => {
        sendMessage(currentId, message);
        setMessage('');
    };

    const onKeyDownHandler = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(message.length > 0) {
                onSendMessage();
            }
        }
    };

    const currentDialogMessages = messages.length ? messages.map(m => (
        <div key={m.id} onClick={() => addDeleteMessagesId(m.id)}
            className={deleteMessagesId.includes(m.id) ? style.deleteMessages + ' ' + style.message : style.message}>
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
                <div className={style.buttonsContainer}>
                    <div>
                        {
                            deleteMessagesId.length > 0 &&
                            <DeleteMessagesButtons cancelDeleteMessages={cancelDeleteMessages}
                                onDeleteMessage={onDeleteMessage} />}
                    </div>
                    <button disabled={!message.length} className={style.dialogButton} onClick={onSendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
});

const DeleteMessagesButtons = ({cancelDeleteMessages, onDeleteMessage}) => (
    <>
        <button onClick={cancelDeleteMessages} className={style.dialogButton + ' ' + style.deleteMessagesButton}>
            cancel
        </button>
        <button onClick={onDeleteMessage} className={style.dialogButton + ' ' + style.deleteMessagesButton}>
            delete
        </button>
    </>
);

export default DialogsMessages;
