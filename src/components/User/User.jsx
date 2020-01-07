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
import {
    getId,
    getIsFetching,
    getPosts,
    getProfile,
    getStateStatus
} from '../../selectors/profileSelectors';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

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
        document.title = 'Developers Network';
        setProfile(id || authId);
        getStatus(id || authId);
    }, [auth, authId, getStatus, id, setProfile]);

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
    authId: getId(state)
});

export default compose(
    connect(mapStateToProps, {
        addPost,
        deletePost,
        toggleLiked,
        setProfile,
        updateStatus,
        getStatus,
        updatePhoto
    }),
    withRouter)(User);
