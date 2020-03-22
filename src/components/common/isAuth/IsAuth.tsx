import React from 'react';
import style from './IsAuth.module.css';
import { A } from 'hookrouter';

const IsAuth = () => (
    <div className={style.isAuth}>
        <div className={style.title}>You should login first</div>
        <div className={style.link}>
            <A href='/login'>Login</A>
        </div>
    </div>
);

export default IsAuth;
