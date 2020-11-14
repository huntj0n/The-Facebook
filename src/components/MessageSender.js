import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar, Input } from '@material-ui/core';


const MessageSender = () => {
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
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src='https://i.kym-cdn.com/entries/icons/facebook/000/031/015/cover5.jpg' />
                <form>
                    <input 
                        type="text" className='messageSender__input'
                        placeholder='Whats on your mind?'
                        value={input} onChange={(e) => setInput(e.target.value)}
                    />
                    <Input 
                        type='file' className='messageSender__fileSelector'
                        onChange={handleChange} />
                    <button 
                        onClick={handleSubmit} 
                        type='submit'>
                            Hidden Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
