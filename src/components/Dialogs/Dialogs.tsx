import React from 'react';

import style from './Dialogs.module.css';

import DialogsUsers from './DialogsUsers';
import { DialogsMessages } from './DialogsMessages';

type PropsType = {
  dialogs: Array<DialogType> | null;
  messages: Array<MessageType>;
  currentId: number;
  isLoading: boolean;
  sendMessage: () => void;
  getMessages: () => void;
  deleteMessages: () => void;
};

export const Dialogs: React.FC<PropsType> = ({
  dialogs,
  currentId,
  isLoading,
  sendMessage,
  getMessages,
  messages,
  deleteMessages,
}): string | any => {
  if (!dialogs) return 'No dialogs';
  return (
    <div className={style.container}>
      <DialogsUsers
        dialogs={dialogs}
        currentId={currentId}
        getMessages={getMessages}
      />
      <DialogsMessages
        messages={messages}
        sendMessage={sendMessage}
        currentId={currentId}
        deleteMessages={deleteMessages}
        isLoading={isLoading}
      />
    </div>
  );
};
