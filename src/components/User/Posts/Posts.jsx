import React, {useState} from 'react';
import uuid from 'uuid'
import ava1 from '../../../assets/avatars/ava1.jpg'
import style from './Post.module.css';
import PostItem from './PostItem';

const Posts = ({posts, addPost, deletePost, toggleLiked}) => {

    const [postText, setPostText] = useState('');

    const handleChange = e => {
        setPostText(e.target.value)
    };

    const handleKeyDown = e => {
        if(e.key === 'Enter') onAddPost ()
    };

    const onAddPost = () => {
        const post = {
            id: uuid.v4(),
            ava: ava1,
            text: postText,
            likes: 0,
            liked: false,
            date: new Date()
        };
        addPost(post);
        setPostText('')
    };

    return (
        <div className={style.wrapper}>
            <div className={style.add__form}>
                <input type='text' value={postText} onChange={handleChange} onKeyDown={handleKeyDown} />
                <button type='button' onClick={onAddPost}>Add</button>
            </div>
            {posts.map(post => <PostItem key={post.id} post={post} toggleLiked={toggleLiked}
                deletePost={deletePost}/>)}
        </div>
    )
};

export default Posts;
