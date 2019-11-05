import React, {useState} from 'react'
import style from './Profile.module.css'
import defaultAvatar from '../../../assets/avatars/anonymous.jpg'
import Spinner from '../../common/Spinner';

const Profile = ({profile}) => {
    const [status, setStatus] = useState('');
    const [editMode, setEditMode] = useState(false);

    const onKeyPressToggleEditMode = e => {
        if (e.key === 'Enter') {
            setEditMode(false);
        }
    };

    const toggleEditMode = () => setEditMode(false);

    if(!profile)  return <Spinner />;

    const {photos, fullName} = profile;

    return (
        <>
            <div className={style.user}>
                <div className={style.user__avatar}>
                    <img src={photos.large || defaultAvatar} alt='user avatar' />
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
                                value={status}
                                autoFocus={true}
                                onBlur={toggleEditMode}
                                onKeyPress={onKeyPressToggleEditMode}
                                onChange={e => setStatus(e.target.value)}
                            />
                        ) : (
                            status
                        )}
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
