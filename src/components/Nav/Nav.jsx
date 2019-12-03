import React, { useState } from 'react';
import { A } from 'hookrouter';
import style from './Nav.module.css';

const Nav = () => {
    const [active, setActive] = useState(null);

    return (
        <div className={style.wrapper}>
            <ul className={style.links__list}>
                <li>
                    <A
                        className={
                            active === 1 ? style.link + ' ' + style.active : style.link
                        }
                        onClick={() => setActive(1)}
                        href={`/profile`}
                    >
            Profile
                    </A>
                </li>
                <li>
                    <A
                        className={
                            active === 2 ? style.link + ' ' + style.active : style.link
                        }
                        onClick={() => setActive(2)}
                        href={'/dialogs'}
                    >
            Dialogs
                    </A>
                </li>
                <li>
                    <A
                        className={
                            active === 6 ? style.link + ' ' + style.active : style.link
                        }
                        onClick={() => setActive(6)}
                        href={'/users'}
                    >
            Users
                    </A>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
