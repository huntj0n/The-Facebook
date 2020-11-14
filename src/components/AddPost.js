import React, { useState } from 'react';
import './AddPost.css';
import { Avatar, Input } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const AddPost = () => {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('submitting')
    }

    return (
        <div className="addPost">
            <div className="addPost__top">
                <Avatar src='https://i.kym-cdn.com/entries/icons/facebook/000/031/015/cover5.jpg' />
                <form>
                    <input 
                        type="text" className='addPost__input'
                        placeholder='Whats on your mind?'
                        value={input} onChange={(e) => setInput(e.target.value)}
                    />
                    <Input 
                        type='file' className='addPost__fileSelector'
                        onChange={handleChange} />
                    <button 
                        onClick={handleSubmit} 
                        type='submit'>
                            Hidden Submit
                    </button>
                </form>
            </div>

            <div className="addPost__bottom">
                <div className="addPost__option">
                    <PhotoLibraryIcon style={{color: '#4cbd66'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="addPost__option">
                    <PersonAddIcon style={{color: '#2e81f4'}}/>
                    <h3>TagFriends</h3>
                </div>
                <div className="addPost__option">
                    <EmojiEmotionsIcon style={{color: '#ffcf2e'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default AddPost
