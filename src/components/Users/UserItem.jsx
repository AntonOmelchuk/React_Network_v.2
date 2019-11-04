import React from 'react';
import style from './Users.module.css';

const UserItem = ({user, toggleFollowing}) => {
    const {id, avatar, name, follow} = user;

    const handleToggleFollowing = () => toggleFollowing(id);

    return (
        <div className={style.user}>
            <div className={style.info}>
                <div className={style.avatar}>
                    <img src={avatar} alt='user avatar' />
                </div>
                <div className={style.name}>{name}</div>
            </div>
            <div className={style.follow} onClick={handleToggleFollowing}>
                <span>{follow ? 'unfollow' : 'follow'}</span>
            </div>
        </div>
    );
};

export default UserItem;
