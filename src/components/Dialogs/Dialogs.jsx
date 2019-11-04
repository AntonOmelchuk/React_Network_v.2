import React from 'react';
import DialogItem from './DialogItem';
import {connect} from 'react-redux';
import style from './Dialogs.module.css'

const Dialogs = ({dialogs}) => (
    <div className={style.wrapper}>
        {dialogs.map(dialog => (
            <DialogItem key={dialog.id} dialog={dialog} />))}
    </div>

);

const mapStateToProps = state => ({
    dialogs: state.dialogs
});

export default connect(mapStateToProps, null)(Dialogs);
