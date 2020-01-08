import React from 'react';
import {connect} from 'react-redux';
import {A} from 'hookrouter';

import {Container, Content, Header, Name} from './sendMessageSuccessModal.style';

import {hideSendMessageSuccessModal} from '../../../../actions/dialogsActions';

const SendMessageSuccessModal = ({user, hideSendMessageSuccessModal}) => {
    return (
        <Container>
            <Header>
                <span>Message sent</span>
                <i className='fas fa-times' onClick={hideSendMessageSuccessModal} />
            </Header>
            <Content>
                <span>Your message was sent to</span>
                <Name>
                    <A href={`/profile/${user.id}`} onClick={hideSendMessageSuccessModal}>{user.name}</A>
               </Name>
            </Content>
        </Container>
    );
};

const mapStateToProps = state => ({
    user: state.dialogs.currentUser
});

export default connect(mapStateToProps, {hideSendMessageSuccessModal})(SendMessageSuccessModal);
