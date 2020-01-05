import React from 'react';
import {A} from 'hookrouter';
import defaultAvatar from '../../assets/avatars/common.jpg';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import style from './Dialogs.module.css';

const DialogsUsers = React.memo(({dialogs, currentId, getMessages}) => {
    console.log('render')
    const users = dialogs.map(d => (
        <div key={d.id}>
            <A className={currentId == d.id ? style.user + ' ' + style.active : style.user}
                href={`/dialogs/${d.id}`} onClick={() => getMessages(d.id)}>
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
