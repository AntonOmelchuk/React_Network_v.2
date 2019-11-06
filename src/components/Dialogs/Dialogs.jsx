import React from 'react'
import DialogItem from './DialogItem'
import {connect} from 'react-redux'
import style from './Dialogs.module.css'
import {setCurrentDialog} from '../../actions/dialogsActions';

const Dialogs = (props) => (
    <div className={style.wrapper}>
        {props.dialogs.map(dialog => (
            <DialogItem key={dialog.id} dialog={dialog} setCurrentDialog={props.setCurrentDialog}/>))}
    </div>
)

const mapStateToProps = state => ({
    dialogs: state.dialogs.dialogs
});

export default connect(mapStateToProps, {setCurrentDialog})(Dialogs);
