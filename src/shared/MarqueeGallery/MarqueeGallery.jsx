import React from 'react'

import './MarqueeGallery.css'

const MarqueeGallery = ({path}) => {
  return (
    <div className="marqueeGallery__container">
        <img src={path} alt="" />
    </div>
  )
}

export default MarqueeGallery