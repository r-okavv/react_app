import axios from "axios";
import React, { useState,useEffect } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {format} from "timeago.js";
import { Link } from "react-router-dom";
// import { Users } from '../../dummyData';

export const Post = ({post}) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser]= useState({});

  // Timeline.jsxから渡されたpostを受け取り、post.userIdでpostを投稿したuserのIDを受けっている
  // useEffectはレンダリング時に一度だけ実行される。第二引数が変更されると再度実行される
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);


  const handleLike = ()=>{
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
            <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className='postProfileImg'/>
            </Link>
              <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.img} alt="" className='postImg'/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="" className="likeIcon" onClick={()=>handleLike()} />
            <span className="postLikeCounter">{like}Likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}