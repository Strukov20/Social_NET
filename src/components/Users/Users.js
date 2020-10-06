import React, {Component} from 'react';
import './Users.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user_img.svg'

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                //this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className="users">
                {
                    this.props.users.map(u => <div className="users__wrapper" key={u.id}>
                            <div className="users__item">
                                <div className="users__avatar">
                                    <div className="users__avatar__wrapper">
                                        <img className="users__avatar__img"
                                             src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button className="users__button" onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}> Unfollow </button>
                                            : <button className="users__button_follow" onClick={() => {
                                                this.props.follow(u.id)
                                            }}> Follow </button>
                                        }

                                    </div>
                                </div>
                                <div className="users__info">
                                    <div>
                                        <div className="users__info__fullName">{u.name}</div>
                                        <div className="users__info__status">How are you?</div>
                                    </div>
                                </div>
                                <div className="users__locate">
                                    <div>
                                        <div className="users__locate_country">Ukraine</div>
                                        <div className="users__locate_city">Kiev</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="users__pagination">
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && "users__pagination_selected"}
                                     onClick={(e) => {this.onPageChanged(p)}}
                        >{p}</span>
                    })}
                </div>
                {/*<div className="users__butWrap">*/}
                {/*    <button className="users__butWrap__showMoreBut">Show More</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Users;