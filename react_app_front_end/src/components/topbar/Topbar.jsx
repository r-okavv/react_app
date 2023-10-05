import React from 'react'

export default function Topbar() {
  return (
    <div className="topbar-Container">
        <div className="topbarLeft">
            <span className="logo">React App</span>
        </div>
        <div className="topbar-Center">
            <div className="searchBar">
                <input type="text"className="searchInput" placeholder="what do you looking for?" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIconItem">1</div>
            <div className="topbarIconItem2">2</div>
        </div>
        <img src="/assets/person/1.png" alt="" className="topbarImage" />
    </div>
  )
}
