import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = ({ profilePic, message, timestamp, imgName, username}) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar 
                    src={profilePic}
                    className='post__avatar'
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString( )}</p>
                </div> 
            </div>

            <div className="post__bottom">
                <p>{message}</p>
                {/* imgName */}
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Commet</p>
                </div>
                <div className="post__option">
                    <ReplyOutlinedIcon style={{transform: 'scaleX(-1)'}}/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
