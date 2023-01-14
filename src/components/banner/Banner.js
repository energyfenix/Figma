import React from 'react'
import BannerBottom from './banner-bottom/BannerBottom'
import BannerMiddle from './banner-middle/BannerMiddle'
import BannerTop from './banner-top/BannerTop'

function Banner() {
  return (
    <div className='banner'>
        <BannerTop/>
        <BannerMiddle/>
        <BannerBottom/>
    </div>
  )
}

export default Banner