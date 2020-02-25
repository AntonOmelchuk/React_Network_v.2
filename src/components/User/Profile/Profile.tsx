import React, {useState, useEffect, ChangeEvent} from 'react'

import style from './Profile.module.css';
import defaultAvatar from '../../../assets/avatars/anonymous.jpg';

import Spinner from '../../common/waitingComponents/Spinner';
import { ProfileType } from '../../../../types';

type OwnPropsType = {
  profile: ProfileType,
  status?: string,
  isFetching: boolean,
  updateStatus: (currentStatus?: string) => void,
  updatePhoto: (photo: File) => void
}

type PropsType = OwnPropsType

const Profile: React.FC<PropsType> = ({
    profile,
    status,
    isFetching,
    updateStatus,
    updatePhoto
}) => {
    const [currentStatus, setStatus] = useState<string | undefined>(status);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        setStatus(status);
    }, [editMode, isFetching, profile, status]);

    const onKeyPressToggleEditMode = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            updateStatus(currentStatus);
            setEditMode(false);
        }
    };

    const handleUpdateStatus = () => {
        updateStatus(currentStatus);
        setEditMode(false);
    };

    if (!profile) return <Spinner />;

    const {photos, fullName, lookingForAJob} = profile;
    const {github, instagram, vk} = profile.contacts;

    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null && e.target.files.length) {
          updatePhoto(e.target.files[0]);
        }
    };

    return (
        <>
            <div className={style.user}>
                <div className={style.user__avatar}>
                    <img src={photos.large || defaultAvatar} alt='user avatar' />
                    <div>
                        <label className={style.avatarLabel} htmlFor='avatar'>
                            <i className='fas fa-camera' /> Update photo
                        </label>
                        <input
                            className={style.loadAvatarInput}
                            name='avatar'
                            id='avatar'
                            type='file'
                            onChange={uploadPhoto}
                        />
                    </div>
                </div>
                <div className={style.user__info}>
                    <div className={style.info__field}>
                        <span
                            className={style.status}
                            onDoubleClick={() => setEditMode(true)}
                        >
              Status:{' '}
                        </span>
                        {editMode ? (
                            <input
                                type='text'
                                className={style.status__input}
                                value={currentStatus}
                                autoFocus={true}
                                onBlur={handleUpdateStatus}
                                onKeyPress={onKeyPressToggleEditMode}
                                onChange={e => setStatus(e.target.value)}
                            />
                        ) : (
                            status || 'Incubator student'
                        )}
                    </div>
                    <div className={style.info__field}>
                        <span>Name: </span>
                        {fullName === 'Pirate Roberts' ? 'Anton Omelchuk' : fullName}
                    </div>
                    <div className={style.info__field}>
                        <span>Specialization: </span>React Developer
                    </div>
                    <div className={style.info__field}>
                        <span>Hireable: </span>
                        {lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    <div className={style.info__field}>
                        <span>Contacts: </span>
                        {github && (
                            <>
                                <a className={style.link} href={github} target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github' />
                                </a>
                                <a className={style.link}
                                    href='https://www.facebook.com/profile.php?id=100008345618380&ref=bookmarks'
                                    target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-facebook-f' />
                                </a>
                                <a className={style.link} href={instagram} target='_blank' rel='noopener noreferrer'> 
                                    <i className='fab fa-instagram' />
                                </a>
                                <a className={style.link} href='https://www.linkedin.com/in/AntonOmelchuk/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin-in' />
                                </a>
                                <a className={style.link} href={vk} target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-vk' />
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
