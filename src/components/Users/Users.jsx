import React, {useEffect} from 'react'
import style from './Users.module.css'
import {connect} from 'react-redux'
import UserItem from './UserItem'
import ReactPaginate from 'react-paginate';
import {getUsers, setCurrentPage, toggleFollowing} from '../../actions/usersActions';

const Users = ({users, totalCount, pageSize, getUsers, toggleFollowing, currentPage, setCurrentPage}) => {

    useEffect(() => {
        getUsers(currentPage)
    }, [currentPage, getUsers]);

    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handleCurrentPage = e => {
        console.log(e.selected + 1)
        setCurrentPage(e.selected + 1)
    };

    if(users.length) {
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
                {users.map(user => (
                    <UserItem key={user.id} user={user} toggleFollowing={toggleFollowing} />))}
            </div>
        )
    } else {
        return <h3>No users</h3>
    }



};

const mapStateToProps = state => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage
});

export default connect(mapStateToProps, {
    toggleFollowing,
    getUsers,
    setCurrentPage
})(Users);
