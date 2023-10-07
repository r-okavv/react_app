import React from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

export const Post = ({post}) => {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.png" alt="" className='postProfileImg'/>
              <span className="postUsername">
                {Users.filter((user)=> user.id === post.userId)[0].username}
              </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className='postImg'/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <spna className="postLikeCounter">{post.like}Likes</spna>
          </div>
          <div className="postBottomRight">
            <spna className="postCommentText">{post.comment} Comments</spna>
          </div>
        </div>
      </div>
    </div>
  )
}