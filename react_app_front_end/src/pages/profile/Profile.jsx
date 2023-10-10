import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"

export default function Profile() {
  return (
		<>
			<div className="profile">
				<Sidebar/>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src="assets/post/3.jpeg" alt="" className='profileCoverImg'/>
							<img src="assets/person/1.png" alt="" className='profileUserImg'/>
						</div>
						<div className="profileinfo">
							<h4 className="profileInfoName">Okada</h4>
							<span className='profileInfoDesc'>Studying Coding</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Timeline />
						<Rightbar />
					</div>
				</div>
			</div>
		</>
		)
}
