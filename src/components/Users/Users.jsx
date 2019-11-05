import React, {useEffect} from 'react'
import style from './Users.module.css'
import {connect} from 'react-redux'
import UserItem from './UserItem'
import ReactPaginate from 'react-paginate'
import {
    followUser,
    getUsers,
    setCurrentPage,
    toggleFetching,
    unFollowUser
} from '../../actions/usersActions'
import Spinner from '../common/Spinner'

const Users = ({users, totalCount, pageSize, getUsers, currentPage, setCurrentPage, toggleFetching,
    isFetching, followUser, unFollowUser, disabledButton}) => {

    useEffect(() => {
        toggleFetching();
        getUsers(currentPage);
    }, [currentPage, getUsers, toggleFetching]);

    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handleCurrentPage = e => setCurrentPage(e.selected + 1);

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
                    onPageChange={(e) => handleCurrentPage(e)}
                    containerClassName={style.pagination}
                    subContainerClassName={style.pages__pagination}
                    activeClassName={style.current}
                />
            </div>
            {isFetching ? <Spinner /> :
                (users.map(user => (
                    <UserItem key={user.id} user={user} followUser={followUser} unFollowUser={unFollowUser}
                        disabledButton={disabledButton} />)))
            }
        </div>
    )

};

const mapStateToProps = state => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    disabledButton: state.users.disabledButton
});

export default connect(mapStateToProps, {
    getUsers,
    setCurrentPage,
    toggleFetching,
    followUser,
    unFollowUser
})(Users);
