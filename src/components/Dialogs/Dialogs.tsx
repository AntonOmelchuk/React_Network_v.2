import React from 'react';

import style from './Dialogs.module.css';

import DialogsUsers from './DialogsUsers';
import DialogsMessages from './DialogsMessages';
import {DialogType, MessageType} from '../../../types'

type PropsType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  currentId: number,
  sendMessage: (userId: number, message: string, fromModal?:boolean) => void,
  getMessages: (userId: number) => void,
  deleteMessages: (messages: Array<number>, userId: number) => void
}

class Dialogs extends React.Component<PropsType> {
  render() {
    let {dialogs, currentId, sendMessage, getMessages, messages, deleteMessages} = this.props

    if (!dialogs) return 'No dialogs'
    return (
      <div className={style.container}>
        <DialogsUsers dialogs={dialogs} currentId={currentId} getMessages={getMessages}/>
        <DialogsMessages messages={messages} sendMessage={sendMessage} currentId={currentId}
                         deleteMessages={deleteMessages}/>
      </div>
    )
  }
}

export default Dialogs;
