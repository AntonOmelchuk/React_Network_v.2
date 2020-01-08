import React from 'react';
import {A} from 'hookrouter';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import defaultAvatar from '../../assets/avatars/common.jpg';
import style from './Dialogs.module.css';

const DialogsUsers = React.memo(({dialogs, getMessages, currentId}) => {
    const onClickHandler = id => {
        getMessages(id);
    };

    const users = dialogs.map(d => (
        <div key={d.id}>
            <A className={Number(currentId) === Number(d.id) ? style.user + ' ' + style.active : style.user}
                href={`/dialogs/${d.id}`} onClick={() => onClickHandler(d.id)}>
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

    return (
        <div className={style.users}>
            {users}
        </div>
    );
});

export default DialogsUsers;
