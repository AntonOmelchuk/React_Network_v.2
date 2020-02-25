import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';

import style from './User.module.css';

import UserItem from './UserItem';
import Spinner from '../common/waitingComponents/Spinner';

import {
    followUser,
    getUsers,
    setCurrentPage,
    toggleFetching,
    unFollowUser
} from '../../actions/usersActions';
import {startNewDialog} from '../../actions/dialogsActions';
import {UserType, UserPhotosType} from '../../../types'
import { AppStateType } from '../../reducers';

type MapStatePropsType = {
    users: Array<UserType>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    disabledButton: Array<number>,
    auth: boolean
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number) => void,
    setCurrentPage: (arg0: number) => void,
    toggleFetching: () => void,
    followUser: (id: number) => void,
    unFollowUser: (id: number) => void,
    startNewDialog: (arg0: {status: string | undefined, name: string, id: number, photos: UserPhotosType}) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Users: React.FC<PropsType> = props => {
    const {
        users,
        totalCount,
        pageSize,
        getUsers,
        currentPage,
        setCurrentPage,
        toggleFetching,
        isFetching,
        followUser,
        unFollowUser,
        disabledButton,
        startNewDialog
    } = props;

    useEffect(() => {
        document.title = 'Users';
        toggleFetching();
        getUsers(currentPage);
    }, [currentPage, getUsers, toggleFetching]);

    useEffect(() => () => {
        setCurrentPage(1);
    },
    [setCurrentPage]
    );

    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const handleCurrentPage = (e: {selected: number}) => {
        setCurrentPage(e.selected + 1);
    };

    return (
        <div className={style.wrapper}>
            <div>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pagesCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={10}
                    onPageChange={e => handleCurrentPage(e)}
                    containerClassName={style.pagination}
                  // @ts-ignore
                    subContainerClassName={style.pages__pagination}
                    activeClassName={style.current}
                />
            </div>
            {isFetching ? (
                <Spinner />
            ) : (
                users.map(user => (
                    <UserItem
                        key={user.id}
                        user={user}
                        followUser={followUser}
                        unFollowUser={unFollowUser}
                        disabledButton={disabledButton}
                        startNewDialog={startNewDialog}
                    />
                ))
            )}
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    disabledButton: state.users.disabledButton,
    auth: state.auth.isAuth
});

export default connect<MapStatePropsType, AppStateType>
(mapStateToProps, {
    getUsers,
    setCurrentPage,
    toggleFetching,
    followUser,
    unFollowUser,
    startNewDialog
})(Users);
