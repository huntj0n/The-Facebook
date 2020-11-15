import React from 'react';
import './Widget.css';

const Widget = () => {
    return (
        <div className='widgets'>
            {/* still trying to get this to work */}
            <iframe src="https://www.facebook.com/TheSocialDilemma/"
                width='340'
                height='600'
                style={{ border: 'none', overflow:'hidden' }}
                scrolling='no'
                frameborder="0"
                allowTransparency='true'
                allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widget
