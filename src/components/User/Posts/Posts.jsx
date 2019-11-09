import React from 'react';
import uuid from 'uuid'
import ava1 from '../../../assets/avatars/ava1.jpg'
import style from './Post.module.css';
import PostItem from './PostItem';
import {Field, reduxForm} from 'redux-form';

const Posts = React.memo(({posts, addPost, deletePost, toggleLiked}) => {

    const handleKeyDown = e => {
        if(e.key === 'Enter') onAddPost ()
    };

    const onAddPost = data => {
        const post = {
            id: uuid.v4(),
            ava: ava1,
            text: data.message,
            likes: 0,
            liked: false,
            date: new Date()
        };
        addPost(post);
    };

    return (
        <div className={style.wrapper}>
            <AddPost onAddPost={onAddPost} handleKeyDown={handleKeyDown} />
            {posts.map(post => <PostItem key={post.id} post={post} toggleLiked={toggleLiked}
                deletePost={deletePost}/>)}
        </div>
    )
});

const AddPostForm = ({handleSubmit, handleKeyDown, reset}) => {

    const onSubmit = e => {
        e.preventDefault();
        handleSubmit();
        reset()
    };

    return (
        <form className={style.add__form} onSubmit={onSubmit}>
            <Field type='text' name='message' component='input' onChange={handleKeyDown} maxLength='45'/>
            <button>Add</button>
        </form>
    )
};

const ReduxAddPostForm = reduxForm({form: 'addPost'})(AddPostForm);

const AddPost = ({onAddPost, handleKeyDown}) =>  (
    <ReduxAddPostForm onSubmit={onAddPost} handleKeyDown={handleKeyDown} />
);

export default Posts;
