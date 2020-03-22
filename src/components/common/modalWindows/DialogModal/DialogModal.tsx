import React, { useState } from "react";

import defaultAvatar from '../../../../assets/avatars/common.jpg';

import {
  CloseButtonContainer,
  DialogModalContainer,
  DialogModalHeader,
  DialogModalOverlay,
  SendButton,
  SendButtonContainer,
  Textarea,
  TextareaContainer,
  UserContainer,
  UserInfoContainer,
  UserName,
  UserPhotoContainer,
  UserStatus,
} from './dialogModal.style';

type PropsType = {
  user: NewDialogUserType,
  sendMessage: (userId: number, message: string, fromModal: boolean) => void,
  toggleShowModal: (isShow: boolean) => void
};

const DialogModal: React.FC<PropsType> = ({
  toggleShowModal,
  user,
  sendMessage,
}) => {
  const { id, status, name, photos } = user;

  const [message, setMessage] = useState('');

  const onSendMessage = () => {
    sendMessage(id, message, true);
    setMessage('');
    toggleShowModal(false);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (message.length > 0) {
        onSendMessage();
      }
    }
  };

  return (
    <>
      <DialogModalOverlay onClick={() => toggleShowModal(false)} />
      <DialogModalContainer>
        <DialogModalHeader>
          <CloseButtonContainer>
            <i className='fas fa-times' onClick={() => toggleShowModal(false)} />
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
          <Textarea
            maxLength='594'
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            value={message}
            onKeyDown={(e: React.KeyboardEvent) => onKeyDownHandler(e)}
          />
          <SendButtonContainer>
            <SendButton disabled={!message.length} onClick={onSendMessage}>
              Send
            </SendButton>
          </SendButtonContainer>
        </TextareaContainer>
      </DialogModalContainer>
    </>
  );
};

export default DialogModal;
