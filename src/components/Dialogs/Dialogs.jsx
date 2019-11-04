import React from 'react'
import DialogItem from './DialogItem'
import {connect} from 'react-redux'
import style from './Dialogs.module.css'

const Dialogs = (props) => {

    const chooseDialog = (id) => {
        props.history.push(`/dialogs/${id}`)
    };

    return (
        <div className={style.wrapper}>
            {props.dialogs.map(dialog => (
                <DialogItem key={dialog.id} dialog={dialog} chooseDialog={chooseDialog} />))}
        </div>
    )
};

const mapStateToProps = state => ({
    dialogs: state.dialogs.dialogs
});

export default connect(mapStateToProps, null)(Dialogs);
