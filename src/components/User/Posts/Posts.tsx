import React, {FormEvent} from 'react'
import uuid from 'uuid'
import ava1 from '../../../assets/avatars/ava1.jpg'
import style from './Post.module.css';
import PostItem from './PostItem';
import {Field, reduxForm} from 'redux-form';
import { PostType } from '../../../../types';

type OwnPropsType = {
    posts: Array<PostType>,
    addPost: (post: PostType) => void,
    deletePost: (id: string) => void,
    toggleLiked: (id: string) => void
}

type PropsType = OwnPropsType

const Posts: React.FC<PropsType> = React.memo(({posts, addPost, deletePost, toggleLiked}) => {

    const handleKeyDown = (e: HTMLFormElement) => {
        if(e.key === 'Enter') {
            onAddPost()
        }
    };

    const onAddPost = (data?: any) => {
        if(!data.message) return false;
        const post: PostType = {
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
                deletePost={deletePost} />)}
        </div>
    )
});

// @ts-ignore
const AddPostForm = ({handleSubmit, handleKeyDown, reset}) => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
        reset()
    };

    return (
        <form className={style.add__form} onSubmit={onSubmit}>
            <Field type='text' name='message' component='input' minLength='1' onChange={handleKeyDown} maxLength='45'/>
            <button>Add</button>
        </form>
    )
};

// @ts-ignore
const ReduxAddPostForm = reduxForm({form: 'addPost'})(AddPostForm);

// @ts-ignore
const AddPost = ({onAddPost, handleKeyDown}) =>  (
  // @ts-ignore
    <ReduxAddPostForm onSubmit={onAddPost} handleKeyDown={handleKeyDown} />
);

export default Posts;
