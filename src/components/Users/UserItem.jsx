import React from 'react';
import commonAvatar from '../../assets/avatars/common.jpg'
import style from './Users.module.css';

const UserItem = ({user, toggleFollowing}) => {
    const {id, photos, name, status, followed} = user;

    const handleToggleFollowing = () => toggleFollowing(id);

    return (
        <div className={style.user}>
            <div className={style.info}>
                <div className={style.avatar}>
                    <img src={photos.large || commonAvatar} alt='user avatar' />
                </div>
                <div>
                    <div className={style.status}>{status || 'Incubator student'}</div>
                    <div className={style.name}>{name}</div>
                </div>
            </div>
            <div className={style.follow} onClick={handleToggleFollowing}>
                <span>{followed ? 'unfollow' : 'follow'}</span>
            </div>
        </div>
    );
};

export default UserItem;
