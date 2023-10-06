import React from 'react'
import { Share } from '../share/Share'
import { Post } from '../post/Post'
import "./Timeline.css"

export default function Timeline() {
  return (
    <div className='timeline'>
        <div className="timelineWrapper">
            <Share />
            <Post />
        </div>
    </div>
  )
}
