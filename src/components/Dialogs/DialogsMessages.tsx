import React, { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import style from './Dialogs.module.css';

type PropsType = {
  messages: Array<MessageType>;
  currentId: number;
  isLoading: boolean;
  sendMessage: (currentId: number, message: string) => void;
  deleteMessages: (deleteMessagesId: Array<string>, currentId: number) => void;
};

export const DialogsMessages: React.FC<PropsType> = React.memo(
  ({ messages, sendMessage, currentId, isLoading, deleteMessages }): any => {
    const [message, setMessage] = useState<string>('');
    const [deleteMessagesId, setDeleteMessagesId] = useState<Array<string>>([]);

    const addDeleteMessagesId = (id: string) => {
      if (deleteMessagesId.includes(id)) {
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

    const onKeyDownHandler = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (message.length > 0) {
          onSendMessage();
        }
      }
    };

    const currentDialogMessages = messages.length ? (
      messages.map(m => (
        <div
          key={m.id}
          onClick={() => addDeleteMessagesId(m.id)}
          className={
            deleteMessagesId.includes(m.id)
              ? `${style.deleteMessages} ${style.message}`
              : style.message
          }
        >
          <div className={style.senderInfo}>
            <div className={style.sender}>{m.senderName}</div>
            <div className={style.time}>{m.addedAt.slice(11, 16)}</div>
          </div>
          <div>{m.body}</div>
        </div>
      ))
    ) : (
      <h3>No messages</h3>
    );

    // if (isLoading) return <h3 style={{ paddingLeft: '30px' }}>Loading...</h3>;
    return (
      <div className={style.messages}>
        <div>{currentDialogMessages}</div>
        <div>
          <TextareaAutosize
            className={style.sendMessageTextarea}
            value={message}
            onChange={(e: any): void => setMessage(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent) => onKeyDownHandler(e)}
            maxLength={360}
          />
          <div className={style.buttonsContainer}>
            <div>
              {deleteMessagesId.length > 0 && (
                <DeleteMessagesButtons
                  cancelDeleteMessages={cancelDeleteMessages}
                  onDeleteMessage={onDeleteMessage}
                />
              )}
            </div>
            <button
              disabled={!message.length}
              className={style.dialogButton}
              onClick={onSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
);

type DeleteMessagesButtonsPropsType = {
  cancelDeleteMessages: () => void;
  onDeleteMessage: () => void;
};

const DeleteMessagesButtons: React.FC<DeleteMessagesButtonsPropsType> = ({
  cancelDeleteMessages,
  onDeleteMessage,
}) => (
  <>
    <button
      onClick={cancelDeleteMessages}
      className={`${style.dialogButton} ${style.deleteMessagesButton}`}
    >
      cancel
    </button>
    <button
      onClick={onDeleteMessage}
      className={`${style.dialogButton} ${style.deleteMessagesButton}`}
    >
      delete
    </button>
  </>
);
