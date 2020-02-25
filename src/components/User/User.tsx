import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
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
import {AppStateType} from '../../reducers'
import {PostType, ProfileType} from '../../../types'

type OwnPropsType = {
  id?: number
}

type MapStatePropsType = {
  posts: any,
  profile: ProfileType,
  isFetching: boolean,
  status: string,
  authId: number
}

type MapDispatchPropsType = {
  addPost: (post: PostType) => void,
  deletePost: (id: string) => void,
  toggleLiked: (id: string) => void,
  setProfile: (id: number) => void,
  updateStatus: (status?: string) => void,
  getStatus: (id: number) => void,
  updatePhoto: (photo: File) => void
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

const User: React.FC<PropsType> = ({
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
    authId,
    updatePhoto
}) => {
    useEffect(() => {
        document.title = 'Developers Network';
        setProfile(id || authId);
        getStatus(id || authId);
    }, [authId, getStatus, id, setProfile]);

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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
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
