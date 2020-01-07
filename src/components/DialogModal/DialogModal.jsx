import React, {useState} from 'react';
import {connect} from 'react-redux';

import defaultAvatar from '../../assets/avatars/common.jpg';

import {
    CloseButtonContainer,
    DialogModalContainer,
    DialogModalHeader,
    DialogModalOverlay, SendButton, SendButtonContainer,
    Textarea,
    TextareaContainer,
    UserContainer,
    UserInfoContainer,
    UserName,
    UserPhotoContainer,
    UserStatus
} from './dialogModal.style';

import {sendMessage, toggleShowModal} from '../../actions/dialogsActions';

const DialogModal = ({toggleShowModal, user, sendMessage}) => {
    const {id, status, name, photos} = user;

    const [message, setMessage] = useState('');

    const onSendMessage = () => {
        sendMessage(id, message);
        setMessage('');
        toggleShowModal();
    };

    const onKeyDownHandler = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(message.length > 0) {
                onSendMessage();
            }
        }
    };

    return (
        <>
            <DialogModalOverlay onClick={toggleShowModal} />
            <DialogModalContainer>
                <DialogModalHeader>
                    <CloseButtonContainer>
                        <i className='fas fa-times' onClick={toggleShowModal} />
                    </CloseButtonContainer>
                </DialogModalHeader>
                <UserContainer>
                    <UserPhotoContainer>
                        <img src={photos.large || defaultAvatar} alt='user avatar' />
                    </UserPhotoContainer>
                    <UserInfoContainer>
                        <UserStatus>{status || 'Incubator student'}</UserStatus>
                        <UserName>{name}</UserName>
                    </UserInfoContainer>
                </UserContainer>
                <TextareaContainer>
                    <Textarea maxLength='594' onChange={e => setMessage(e.target.value)} value={message}
                              onKeyDown={e => onKeyDownHandler(e)} />
                    <SendButtonContainer>
                        <SendButton disabled={!message.length} onClick={onSendMessage}>Send</SendButton>
                    </SendButtonContainer>
                </TextareaContainer>
            </DialogModalContainer>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.dialogs.currentUser
});

export default connect(mapStateToProps, {toggleShowModal, sendMessage})(DialogModal);
