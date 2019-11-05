import React from 'react';
import commonAvatar from '../../assets/avatars/common.jpg'
import style from './Users.module.css';
import {NavLink} from 'react-router-dom';

const UserItem = ({user, followUser, unFollowUser}) => {
    const {id, photos, name, status, followed} = user;

    const handleFollow = () => followUser(id);

    const handleUnfollow = () => unFollowUser(id);

    return (
        <div className={style.user}>
            <div className={style.info}>
                <div className={style.avatar}>
                    <NavLink to={`/profile/${id}`}>
                        <img src={photos.large || commonAvatar} alt='user avatar' />
                    </NavLink>
                </div>
                <div>
                    <div className={style.status}>{status || 'Incubator student'}</div>
                    <div className={style.name}>{name}</div>
                </div>
            </div>
            {followed ?
                <div className={style.follow} onClick={handleUnfollow}>
                    <span>unfollow</span>
                </div> :
                <div className={style.follow} onClick={handleFollow}>
                    <span>follow</span>
                </div>
            }
        </div>
    );
};

export default UserItem;
