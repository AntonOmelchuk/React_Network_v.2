import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';
import {
    addPost,
    deletePost,
    getStatus,
    setProfile,
    toggleLiked,
    updatePhoto,
    updateStatus
} from '../../actions/profileActions';
import Login from '../Login/Login';
import {
    getAuth,
    getId,
    getIsFetching,
    getPosts,
    getProfile,
    getStateStatus
} from '../../selectors/profileSelectors';

const User = ({
    id,
    posts,
    profile,
    addPost,
    toggleLiked,
    deletePost,
    setProfile,
    status,
    isFetching,
    updateStatus,
    getStatus,
    auth,
    authId,
    updatePhoto
}) => {
    useEffect(() => {
        setProfile(id || authId);
        getStatus(id || authId);
    }, [auth, authId, getStatus, id, setProfile]);

    if (!auth) return <Login />;

    return (
        <div>
            <Profile
                profile={profile}
                status={status}
                isFetching={isFetching}
                updateStatus={updateStatus}
                updatePhoto={updatePhoto}
            />
            <Posts
                posts={posts}
                addPost={addPost}
                toggleLiked={toggleLiked}
                deletePost={deletePost}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    posts: getPosts(state),
    profile: getProfile(state),
    isFetching: getIsFetching(state),
    status: getStateStatus(state),
    auth: getAuth(state),
    authId: getId(state)
});

export default connect(mapStateToProps, {
    addPost,
    deletePost,
    toggleLiked,
    setProfile,
    updateStatus,
    getStatus,
    updatePhoto
})(User);
