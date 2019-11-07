import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import Profile from './Profile/Profile'
import Posts from './Posts/Posts'
import {addPost, deletePost, getStatus, setProfile, toggleLiked, updateStatus} from '../../actions/profileActions';
import Login from '../Login/Login';

const User = ({id, posts, profile, addPost, toggleLiked, deletePost, setProfile, status, isFetching,
    updateStatus, getStatus, auth}) => {

    useEffect(() => {
        setProfile(id || 1571);
        getStatus(id || 1571)
    }, [id]);

    if(!auth) return <Login />;

    return (
        <div>
            <Profile profile={profile} status={status} isFetching={isFetching} updateStatus={updateStatus} />
            <Posts posts={posts} addPost={addPost} toggleLiked={toggleLiked} deletePost={deletePost} />
        </div>
    )

};

const mapDispatchProps = state => ({
    posts: state.profile.posts,
    profile: state.profile.profile,
    isFetching: state.profile.isFetching,
    status: state.profile.status,
    auth: state.auth.isAuth
});

export default connect(mapDispatchProps, {
    addPost,
    deletePost,
    toggleLiked,
    setProfile,
    updateStatus,
    getStatus
})(User);
