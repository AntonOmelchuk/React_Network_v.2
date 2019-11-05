import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => (
    <div className={style.wrapper}>
        <ul className={style.links__list}>
            <li><NavLink className={style.link} to='/'>Profile</NavLink></li>
            <li><NavLink className={style.link} to='/dialogs'>Dialogs</NavLink></li>
            <li><NavLink className={style.link} to='/dialogs'>Job Openings</NavLink></li>
            <li><NavLink className={style.link} to='/news'>News</NavLink></li>
            <li><NavLink className={style.link} to='friends'>Friends</NavLink></li>
            <li><NavLink className={style.link} to='/users'>Users</NavLink></li>
        </ul>
    </div>
);

export default Nav;
