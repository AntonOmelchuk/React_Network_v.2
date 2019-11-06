import React from 'react'
import {A} from 'hookrouter';
import style from './Nav.module.css'

const Nav = () => (
    <div className={style.wrapper}>
        <ul className={style.links__list}>
            <li><A className={style.link} href={`/profile`}>Profile</A></li>
            <li><A className={style.link} href={'/dialogs'}>Dialogs</A></li>
            <li><A className={style.link} href={'/jobs'}>Job Openings</A></li>
            <li><A className={style.link} href={'/news'}>News</A></li>
            <li><A className={style.link} href={'friends'}>Friends</A></li>
            <li><A className={style.link} href={'/users'}>Users</A></li>
            <li><A className={style.link} href={'/login'}>Login Test</A></li>
        </ul>
    </div>
);

export default Nav;
