import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

//icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
// import { useStateValue } from '../StateProvider';

const Sidebar = () => {
    // const [{ user }, dispatch ] = useStateValue

    return (
        <div className='sidebar'>
            {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}

            <SidebarRow src={'https://i.kym-cdn.com/entries/icons/facebook/000/031/015/cover5.jpg'} title='This also be the Name' />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontOutlinedIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='More' />
        </div>
    )
}

export default Sidebar
