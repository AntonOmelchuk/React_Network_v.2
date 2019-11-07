import React from 'react'
import DialogItem from './DialogItem'
import {connect} from 'react-redux'
import style from './Dialogs.module.css'
import {setCurrentDialog} from '../../actions/dialogsActions';
import Login from '../Login/Login';

const Dialogs = ({dialogs, setCurrentDialog, isAuth}) => {

    if(!isAuth) return <Login />;

    return (
        <div className={style.wrapper}>
            {dialogs.map(dialog => (
                <DialogItem key={dialog.id} dialog={dialog} setCurrentDialog={setCurrentDialog}/>))}
        </div>
    )
};

const mapStateToProps = state => ({
    dialogs: state.dialogs.dialogs,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setCurrentDialog})(Dialogs);
