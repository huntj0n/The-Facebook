import React from 'react';
import './Nav.css';

//icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Nav = () => {
    return (
        <div className='nav'>
            <div className="nav__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook Logo"/>
            </div>
            <div className="nav__input">
                <SearchIcon/>
                <input placeholder="Search EvilCorp" type="text"/>
            </div>
            <div className="nav__center">
                <div className="nav__option nav__option--active">
                    <HomeIcon fontsize='large' />
                </div>
                <div className="nav__option">
                    <FlagIcon fontsize='large' />
                </div>
                <div className="nav__option">
                    <SubscriptionsOutlinedIcon fontsize='large' />
                </div>
                <div className="nav__option">
                    <StorefrontOutlinedIcon fontsize='large' />
                </div>
                <div className="nav__option">
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>
            </div>

            <div className="nav__right">
                <div className="nav__info">
                    <Avatar />
                    <h4>This be the Name</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                
                <IconButton>
                    <ForumIcon />
                </IconButton>              
                
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
               
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Nav
