import React from 'react';

import style from './Dialogs.module.css';

import DialogsUsers from './DialogsUsers';
import DialogsMessages from './DialogsMessages';

const Dialogs = ({dialogs, currentId, sendMessage, getMessages, messages}) => {
   
    if(!dialogs) return 'No dialogs';
    return (
        <div className={style.container}>
            <DialogsUsers dialogs={dialogs} currentId={currentId} getMessages={getMessages} />
            <DialogsMessages messages={messages} sendMessage={sendMessage} currentId={currentId} />
        </div>
    );
};

export default Dialogs;
