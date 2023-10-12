import React from 'react'
import { Share } from '../share/Share'
import { Post } from '../post/Post'
import "./Timeline.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

// import {Posts} from "../../dummyData";


// Postsに入っているオブジェクトを1つずつpostとして取り出しPostに格納
// profileから渡されたusernameをpropsとして受け取っている
export default function Timeline({username}) {
  // APIから取得したデータを格納するための変数,初期値として空配列を指定
  const [posts, setPosts]= useState([]);

  // ページのマウント時に一度だけ読み込まれる
  useEffect(()=>{
    // useEffectは無名関数の部分にasyncを使用できないためasyncを使用するためには関数を作る必要がある
    // asyncを使用しないとデータのfetchがpromise状態のまま進まない
    const fetchPosts = async () =>{
      const response = username
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get("/posts/timeline/651d551a2af3e55a681c14f2");
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  },[]);
  // mongoDBのidは"_id"
  return (
    <div className='timeline'>
        <div className="timelineWrapper">
            <Share />
            {posts.map((post) => (
                < Post post={post} key={post._id} />
            ))}
        </div>
    </div>
  )
}
