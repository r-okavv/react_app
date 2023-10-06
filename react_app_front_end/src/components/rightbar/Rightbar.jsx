import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
		<div className='rightbar'>
			<div className="rightbarWrapper">
				<div className="eventContainer">
					<img src="/assets/star.png" alt="" className='starImg'/>
					<span className='eventText'>
						<b>フォロワー限定</b>イベント開催中
					</span>
				</div>
				<img src="/assets/ad.jpeg" alt="" className='adImg'/>
				<h4 className='rightbarTitle'>オンラインの友達</h4>
				<ul className="rightbarFriendList">
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src="/assets/person/1.png" alt="" className='rightbarProfileImg'/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">User1</span>
					</li>
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src="/assets/person/1.png" alt="" className='rightbarProfileImg'/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">User2</span>
					</li>
				</ul>
				<p className="promotionTitle">プロモーション広告</p>
				<img src="/assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
				<p className="promotionName">Shopping</p>
				<p className="promotionTitle">プロモーション広告</p>
				<img src="/assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg'/>
				<p className="promotionName">Car shop</p>
				<p className="promotionTitle">プロモーション広告</p>
				<img src="/assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg'/>
				<p className="promotionName">AAA Inc.</p>
			</div>
		</div>
  )
}
