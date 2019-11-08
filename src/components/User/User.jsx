import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import Profile from './Profile/Profile'
import Posts from './Posts/Posts'
import {addPost, deletePost, getStatus, setProfile, toggleLiked, updateStatus} from '../../actions/profileActions';
import Login from '../Login/Login';
import {getAuth, getIsFetching, getPosts, getProfile, getStateStatus} from '../../selectors/profileSelectors';

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
    posts: getPosts(state),
    profile: getProfile(state),
    isFetching: getIsFetching(state),
    status: getStateStatus(state),
    auth: getAuth(state)
});

export default connect(mapDispatchProps, {
    addPost,
    deletePost,
    toggleLiked,
    setProfile,
    updateStatus,
    getStatus
})(User);
