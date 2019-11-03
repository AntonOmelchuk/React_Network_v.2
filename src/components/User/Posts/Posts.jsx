import React from 'react';
import style from './Post.module.css';
import ava from '../../../assets/avatars/ava1.jpg'

const Posts = () => {
    return (
        <div className={style.wrapper}>

            <div className={style.post}>
                <div className={style.post__header}>
                    <div className={style.avatar}>
                        <img src={ava} alt='author avatar'/>
                    </div>
                    <div className={style.text}>Some text</div>
                </div>
                <div className={style.post__footer}>
                    <div>Likes: 12</div>
                    <div>Date</div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.post__header}>
                    <div className={style.avatar}>
                        <img src={ava} alt='author avatar'/>
                    </div>
                    <div className={style.text}>Some text</div>
                </div>
                <div className={style.post__footer}>
                    <div>Likes: 12</div>
                    <div>Date</div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.post__header}>
                    <div className={style.avatar}>
                        <img src={ava} alt='author avatar'/>
                    </div>
                    <div className={style.text}>Some text</div>
                </div>
                <div className={style.post__footer}>
                    <div>Likes: 12</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
