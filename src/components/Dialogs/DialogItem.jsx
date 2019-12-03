import React from 'react';
import { A } from 'hookrouter';
import ava from '../../assets/avatars/eliot.jpg';
import style from './Dialogs.module.css';

const DialogItem = ({ dialog, setCurrentDialog }) => {
    const { id, user, lastMessage, isRead, yourLast } = dialog;

    const handleClick = () => {
        setCurrentDialog(dialog);
    };

    return (
        <A className={style.dialog} href={`/dialogs/${id}`} onClick={handleClick}>
            <div className={style.avatar}>
                <img src={user} alt='user avatar' />
            </div>
            <div
                className={
                    isRead
                        ? style.lastMessage__wrapper
                        : style.lastMessage__wrapper + ' ' + style.unread
                }
            >
                <div className={style.lastMessage}>
                    {lastMessage}
                    <div className={style.profile__avatar}>
                        <img src={yourLast ? ava : user} alt='user avatar' />
                    </div>
                </div>
            </div>
        </A>
    );
};

export default DialogItem;
