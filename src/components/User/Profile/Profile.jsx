import React, {useState, useEffect} from 'react'
import style from './Profile.module.css'
import defaultAvatar from '../../../assets/avatars/anonymous.jpg'
import Spinner from '../../common/Spinner';

const Profile = ({profile, status, isFetching, updateStatus, updatePhoto}) => {

    const [currentStatus, setStatus] = useState(status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(status)
    }, [editMode, status]);


    const onKeyPressToggleEditMode = e => {
        if (e.key === 'Enter') {
            updateStatus(currentStatus);
            setEditMode(false)
        }
    };

    const handleUpdateStatus = () => {
        updateStatus(currentStatus);
        setEditMode(false)
    };

    if(!profile || isFetching)  return <Spinner />;

    const {photos, fullName} = profile;

    const uploadPhoto = (e) => {
        if(e.target.files.length) updatePhoto(e.target.files[0])
    };

    return (
        <>
            <div className={style.user}>
                <div className={style.user__avatar}>
                    <img src={photos.large || defaultAvatar} alt='user avatar' />
                    <div>
                        <label className={style.avatarLabel} htmlFor='avatar'>
                            <i className='fas fa-camera' />{' '}
                            Update photo</label>
                        <input className={style.loadAvatarInput} name='avatar' id='avatar' type='file'
                            onChange={uploadPhoto} />
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
                        ) :
                            status || 'Incubator student'
                        }
                    </div>
                    <div className={style.info__field}>
                        <span>Name: </span>{fullName}
                    </div>
                    <div className={style.info__field}>
                        <span>Specialization: </span>React Developer
                    </div>
                    <div className={style.info__field}>
                        <span>Experience: </span>5 years
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
