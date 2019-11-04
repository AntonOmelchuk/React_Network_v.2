import React, {useEffect} from 'react';
import style from './Users.module.css';
import {connect} from 'react-redux';
import UserItem from './UserItem';
import {getUsers, toggleFollowing} from '../../actions/usersActions';

const Users = ({users, getUsers, toggleFollowing}) => {

    useEffect(() => {
        getUsers()
    }, []);


    if(users.length) {
        return (
            <div className={style.wrapper}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} toggleFollowing={toggleFollowing} />))}
            </div>
        )
    } else {
        return <h3>No users</h3>
    }



};

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, {toggleFollowing, getUsers})(Users);
