import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <h3 className={style.title}>Developers network</h3>
            </div>
        </div>
    );
};

export default Navbar;
