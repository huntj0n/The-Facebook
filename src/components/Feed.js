import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import AddPost from './AddPost';
import Post from './Post';


const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <AddPost />
            <Post 
                profilePic='https://pbs.twimg.com/profile_images/1237550450/mstom.jpg'
                message='Welcome to Myspace!'
                timestamp='1601493943737'
                imgName='imgName'
                username='MySpace Tom'
            />


            {/* {
                postData.map(entry => (
                    <Post 
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imageName={entry.imageName}
                        username={entry.user}
                    />
                ))
            } */}
        </div>
    )
}

export default Feed
