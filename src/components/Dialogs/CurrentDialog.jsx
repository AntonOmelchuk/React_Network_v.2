import React from 'react';
import style from './Dialogs.module.css'
import avatar from '../../assets/avatars/eliot.jpg'
import {connect} from "react-redux";

const CurrentDialog = (props) => {

    if(props.dialog === null) {
        return <h3>No messages</h3>
    } else {

        const {messages, user} = props.dialog;

        return (
            <div className={style.current__dialog}>
                {messages.map(message => (
                    <div className={message.isYour ? style.profile__message : style.message}>
                        <div className={style.current__avatar}>
                            <img src={message.isYour ? avatar : user} alt='avatar' />
                        </div>
                        <div className={style.current__message}>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    dialog: state.dialogs.current
});

export default connect(mapStateToProps, null)(CurrentDialog);
