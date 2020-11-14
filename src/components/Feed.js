import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import AddPost from './AddPost';


const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <AddPost />



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
