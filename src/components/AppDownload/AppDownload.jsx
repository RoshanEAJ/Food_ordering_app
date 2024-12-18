import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>For Better Experience Download <br /> Cinnamon App</p>
        <div className="app-download-platforms">
            <img src={assets.appstore} alt="" />
            <img src={assets.googleplay} alt="" />
        </div>
    </div>
  )
}

export default AppDownload