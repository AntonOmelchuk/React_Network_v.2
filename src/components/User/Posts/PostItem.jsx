import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import style from './Post.module.css';

const PostItem = ({post, deletePost, toggleLiked}) => {

    const {id, ava, text, likes, date, liked} = post;

    const handleToggle = () => {
        toggleLiked(id)
    };

    const handleDelete = () => deletePost(id);

    return (
        <div className={style.post}>
            <div className={style.post__header}>
                <div className={style.avatar}>
                    <img src={ava} alt='author avatar'/>
                </div>
                <div className={style.text}>{text}</div>
            </div>
            <div className={style.post__footer}>
                <div className={liked && style.liked}>
                    <span>Likes: {likes}</span>
                    <span>
                        {' '}
                        <i className='fab fa-react' onClick={handleToggle} />
                    </span>
                </div>
                <div>{formatDistanceToNow(new Date(date), { addSuffix: true })}</div>
            </div>
            <span className={style.delete__icon} onClick={handleDelete}>&times;</span>
        </div>
    )
};

export default PostItem;
