import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">React App</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <SearchIcon className='searchIcon'/>
                <input type="text"className="searchInput" placeholder="what do you looking for?" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarItemIcons">
                <div className="topbarIconItem">
                    <ChatIcon />
                    <spna className="topbarIconBadge">1</spna>
                </div>
                <div className="topbarIconItem">
                    <NotificationsActiveIcon />
                    <spna className="topbarIconBadge">2</spna>
                </div>
                <img src="/assets/person/1.png" alt="" className="topbarImage" />
            </div>
        </div>
    </div>
  )
}
