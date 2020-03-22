import React from 'react';
import { connect } from 'react-redux';
import { A } from 'hookrouter';

import {
  Container,
  Content,
  Header,
  Name,
} from './sendMessageSuccessModal.style';

import { toggleShowSendMessageSuccessModal } from '../../../../actions/dialogsActions';
import { AppStateType } from "../../../../reducers";

type OwnPropsType = {
  toggleShowSendMessageSuccessModal: (isShow: boolean) => void
}

type MapStateToPropsType = {
  user: NewDialogUserType
}

type PropsType = OwnPropsType & MapStateToPropsType

const SendMessageSuccessModal: React.FC<PropsType> = ({ user, toggleShowSendMessageSuccessModal }) => {
  return (
    <Container>
      <Header>
        <span>Message sent</span>
        <i className='fas fa-times' onClick={() => toggleShowSendMessageSuccessModal(false)} />
      </Header>
      <Content>
        <span>Your message was sent to</span>
        <Name>
          <A href={`/profile/${user.id}`} onClick={() => toggleShowSendMessageSuccessModal(false)}>
            {user.name}
          </A>
        </Name>
      </Content>
    </Container>
  );
};

// @ts-ignore
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  // @ts-ignore
  user: state.dialogs.currentUser,
});

export default connect(mapStateToProps, { toggleShowSendMessageSuccessModal })(
  SendMessageSuccessModal
);
