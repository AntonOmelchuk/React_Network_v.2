import React from 'react';
import {A} from 'hookrouter';

import style from './Users.module.css';

import commonAvatar from '../../assets/avatars/common.jpg';
import {UserType, UserPhotosType} from '../../../types'

type PropsType = {
    user: UserType,
    followUser: (id: number) => void,
    unFollowUser: (id: number) => void,
    disabledButton: Array<number>,
    startNewDialog: (object: {status: string | undefined, name: string, id: number, photos: UserPhotosType}) => void
}

export const UserItem: React.FC<PropsType> = ({
    user, followUser, unFollowUser, disabledButton, startNewDialog
}) => {
    const {id, photos, name, status, followed} = user;

    const handleFollow = () => followUser(id);

    const handleUnfollow = () => unFollowUser(id);

    return (
        <div className={style.user}>
            <div className={style.info}>
                <div className={style.avatar}>
                    <A href={`/profile/${id}`}>
                        <img src={photos.large || commonAvatar} alt='user avatar' />
                    </A>
                </div>
                <div>
                    <div className={style.status}>{status || 'Incubator student'}</div>
                    <div className={style.name}>{name}</div>
                    <div className={style.writeMessageButton}
                         onClick={() => startNewDialog({status, name, id, photos})}>
                        Write message
                    </div>
                </div>
            </div>
            {followed ? (
                <button
                    className={style.follow}
                    disabled={disabledButton.some(i => i === id)}
                    onClick={handleUnfollow}
                >
          unfollow
                </button>
            ) : (
                <button
                    className={style.follow}
                    disabled={disabledButton.some(i => i === id)}
                    onClick={handleFollow}
                >
          follow
                </button>
            )}
        </div>
    );
};

export default UserItem;
