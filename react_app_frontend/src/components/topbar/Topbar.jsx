import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./Topbar.css";
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration: "none", color:"white"}}>
            <span className="logo">React App</span>
          </Link>
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
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsActiveIcon />
                    <span className="topbarIconBadge">2</span>
                </div>
                <img src="/assets/person/1.png" alt="" className="topbarImage" />
            </div>
        </div>
    </div>
  )
}
