import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => (
    <div className={style.wrapper}>
        <NavLink className={style.link} to='/'>Profile</NavLink>
        <NavLink className={style.link} to='/dialogs'>Dialogs</NavLink>
        <NavLink className={style.link} to='/dialogs'>Job Openings</NavLink>
        <NavLink className={style.link} to='/news'>News</NavLink>
        <NavLink className={style.link} to='friends'>Friends</NavLink>
        <NavLink className={style.link} to='/users'>Users</NavLink>
    </div>
);

export default Nav;
