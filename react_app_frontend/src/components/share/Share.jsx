import React from 'react'
import "./Share.css"
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import BarChartIcon from '@mui/icons-material/BarChart';

export const Share = () => {
  return (
  <div className='share'>
    <div className="shareWrapper">
      <div className="shareTop">
        {/* <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className='shareProfileImg'/> */}
        <img src="/assets/person/noAvatar.png" alt="" className='shareProfileImg'/>
        <input type="text" className='shareInput' placeholder="What's happning?"/>
      </div>
      <hr className="shareHr" />

      <div className="shareButtons">
        <div className="shareOptions">
          <div className="shareOption">
            <ImageIcon className='shareIcon' htmlColor="#00838f"/>
            <span className="shareOptionText">写真</span>
          </div>
          <div className="shareOption">
            <GifIcon className='shareIcon' htmlColor="#00838f" />
            <span className="shareOptionText ">Gif</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsIcon className='shareIcon' htmlColor="#00838f" />
            <span className="shareOptionText">気持ち</span>
          </div>
          <div className="shareOption">
            <BarChartIcon className='shareIcon' htmlColor="#00838f" />
            <span className="shareOptionText">投票</span>
          </div>
        </div>
        <button className='shareButton'>投稿</button>
      </div>
    </div>
  </div>
 )
}
