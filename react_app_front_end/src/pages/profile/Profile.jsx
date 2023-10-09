import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"

export default function Profile() {
  return (
		<>
			<Topbar/>
			<div className="profile">
				<Sidebar/>
				<Timeline />
				<Rightbar />
			</div>
		</>
		)
}
