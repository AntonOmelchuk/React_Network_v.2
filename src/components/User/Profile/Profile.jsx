import React, {useState, useEffect} from 'react'
import style from './Profile.module.css'
import defaultAvatar from '../../../assets/avatars/anonymous.jpg'
import Spinner from '../../common/Spinner';

const Profile = ({profile, status, isFetching, updateStatus}) => {

    const [currentStatus, setStatus] = useState(status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(status)
    }, [editMode]);


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
