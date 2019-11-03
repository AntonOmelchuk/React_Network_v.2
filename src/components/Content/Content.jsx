import React from 'react';
import style from './Content.module.css';
const Content = (props) => {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    );
};

export default Content;
