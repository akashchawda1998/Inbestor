import React from 'react'
import Banner from './Banner'
import About from './About'
import Plan from './Plan'
import ReelsCarousel from './ReelsCarousel'
import LatestInsightsSection from './LatestInsightsSection'
import Compare from './compare'

export default function Main() {
  return (
  <>
  <Banner/>
  <About/>
  <Compare/>
  <Plan/>
  <ReelsCarousel/>
  <LatestInsightsSection/>
  </>
  )
}
