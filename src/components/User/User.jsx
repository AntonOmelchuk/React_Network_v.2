import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import Profile from './Profile/Profile'
import Posts from './Posts/Posts'
import {addPost, deletePost, setProfile, toggleLiked} from '../../actions/profileActions';

const User = ({posts, profile, addPost, toggleLiked, deletePost, setProfile, ...props}) => {

    useEffect(() => {
        const id = props.match.params.id || 1571;
        setProfile(id);
    });

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
