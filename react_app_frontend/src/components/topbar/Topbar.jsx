import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./Topbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import { useContext } from 'react';

export default function Topbar() {
  const {user} = useContext(AuthContext);
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
                <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.png" } alt="" className="topbarImage" />
                </Link>
            </div>
        </div>
    </div>
  )
}
