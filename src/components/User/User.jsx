import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import Profile from './Profile/Profile'
import Posts from './Posts/Posts'
import {addPost, deletePost, setProfile, toggleLiked} from '../../actions/profileActions';

const User = ({id, posts, profile, addPost, toggleLiked, deletePost, setProfile}) => {

    useEffect(() => {
        setProfile(id || 1571);
    }, [id]);

    return (
        <div>
            <Profile profile={profile} />
            <Posts posts={posts} addPost={addPost} toggleLiked={toggleLiked} deletePost={deletePost} />
        </div>
    )

};

const mapDispatchProps = state => ({
    posts: state.profile.posts,
    profile: state.profile.profile
});

export default connect(mapDispatchProps, {
    addPost,
    deletePost,
    toggleLiked,
    setProfile
})(User);
