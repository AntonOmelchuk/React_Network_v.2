import React from 'react';
import style from './Users.module.css';
import {connect} from 'react-redux';
import UserItem from './UserItem';
import {toggleFollowing} from '../../actions/usersActions';

const Users = ({users, toggleFollowing}) => (
    <div className={style.wrapper}>
        {users.map(user => (
            <UserItem key={user.id} user={user} toggleFollowing={toggleFollowing} />))}
    </div>
);

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, {toggleFollowing})(Users);
