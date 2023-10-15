import React from 'react'
import "./Share.css"
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { useRef } from 'react';
import axios from 'axios';

export const Share = () => {
  const {user} = useContext(AuthContext);
  const desc = useRef();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try{
      await axios.post("/posts", newPost);
      window.location.reload();
    }catch(err){
      console.log(err);
    }
  };

  return (
  <div className='share'>
    <div className="shareWrapper">
      <div className="shareTop">
        {/* <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className='shareProfileImg'/> */}
        <img src="/assets/person/noAvatar.png" alt="" className='shareProfileImg'/>
        <input type="text" className='shareInput' placeholder="What's happning?" ref={desc}/>
      </div>
      <hr className="shareHr" />

      <form className="shareButtons" onSubmit={(e)=> handleSubmit(e)}>
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
        <button className='shareButton' type="submit">投稿</button>
      </form>
    </div>
  </div>
 )
}
