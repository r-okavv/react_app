import React from 'react'
import { Users } from '../../dummyData';

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className='sidebarFriendImg'/>
        <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}