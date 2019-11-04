import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile/Profile'
import Posts from './Posts/Posts'
import {addPost, toggleLiked} from '../../actions/profileActions';

const User = ({posts, addPost, toggleLiked}) => (
    <div>
        <Profile />
        <Posts posts={posts} addPost={addPost} toggleLiked={toggleLiked} />
    </div>
);

const mapDispatchProps = state => ({
    posts: state.profile.posts
});

export default connect(mapDispatchProps, {
    addPost,
    toggleLiked
})(User);
