import React from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.png" alt="" className='postProfileImg'/>
            <span className="postUsername">SampleName</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Studying react...</span>
          <img src="/assets/post/1.jpeg" alt="" className='postImg'/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <spna className="postLikeCounter">5 Likes</spna>
          </div>
          <div className="postBottomRight">
            <spna className="postCommentText">3 Comments</spna>
          </div>
        </div>
      </div>
    </div>
  )
}