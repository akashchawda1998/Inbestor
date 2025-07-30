import React from 'react'
import bannerimg from './banner.png'
import video from './banner.mp4'
export default function Banner() {
  return (
    <section className='homebanner'>
       <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    >
      <source src={video}type="video/mp4" />
      Your browser does not support the video tag.
    </video>


    </section>
  )
}
