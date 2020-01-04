import React, {useEffect, useState} from 'react';
import style from './Dialogs.module.css';

import {connect} from 'react-redux';
import {sendMessage, getDialogs} from '../../actions/dialogsServerActions';
import Spinner from '../common/Spinner';

const DialogsWithServer = ({dialogs, sendMessage, getDialogs, isLoading}) => {
    useEffect(() => {
        getDialogs();
    }, [getDialogs]);

    const [message, setMessage] = useState('');

    const onSendMessage = () => {
        sendMessage(2, message);
    };
    
    const users = dialogs.map(d => (
        <div className={style.user} key={d.id}>
            <img src={d.photos.small} alt='user avatar' />
            <div>{d.userName}</div>
        </div>
    ));

    // const messages =

    console.log(dialogs);

    if(isLoading) {
        return (
            <div className={style.container}>
                {<Spinner />}
            </div>
        );
    } else {
        if(!dialogs) return 'No dialogs';
        return (
            <div className={style.container}>
                <>{users}</>
                <div>
                    <div>Messages</div>
                    <input type='text' onChange={e => setMessage(e.target.value)} value={message} />
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    dialogs: state.dialogsServer.dialogs,
    isLoading: state.dialogsServer.isLoading
});
 
export default connect(mapStateToProps, {sendMessage, getDialogs})(DialogsWithServer);
