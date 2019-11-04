import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile/Profile'
import Posts from './Posts/Posts'
import {addPost, deletePost, toggleLiked} from '../../actions/profileActions';

const User = ({posts, addPost, toggleLiked, deletePost}) => (
    <div>
        <Profile />
        <Posts posts={posts} addPost={addPost} toggleLiked={toggleLiked} deletePost={deletePost} />
    </div>
);

const mapDispatchProps = state => ({
    posts: state.profile.posts
});

export default connect(mapDispatchProps, {
    addPost,
    deletePost,
    toggleLiked
})(User);
