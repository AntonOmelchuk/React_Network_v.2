import React from 'react';
import ava from '../../assets/avatars/eliot.jpg'
import style from './Dialogs.module.css'

const DialogItem = ({dialog}) => {

    const {user, lastMessage, isRead, yourLast} = dialog;

    return (
        <div className={style.dialog}>
            <div className={style.avatar}>
                <img src={user} alt='user avatar' />
            </div>
            <div className={isRead ? style.lastMessage__wrapper : style.lastMessage__wrapper + ' ' + style.unread}>
                <div className={style.lastMessage}>
                    <p>{lastMessage}</p>
                    <div className={style.profile__avatar}>
                        <img src={yourLast ? ava : user} alt='user avatar' />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default DialogItem;
