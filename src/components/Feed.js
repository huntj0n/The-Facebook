import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';


const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />



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
