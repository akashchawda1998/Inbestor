import React from 'react'
import WorkshopFormat from './WorkshopFormat'
import HeroSection from './heroSection'
import HowToJoinPath from './howToJoinPath'
import ExpertCallForm from '../Portfolio/ExpertCallForm'
import LedBy from './ledBy'
import WhyWeExist from '../Portfolio/WhyWeExist'
import AboutCommunity from './aboutCommunity'
import WhatWeLookFor from './WeLookFor'
import SemiCircleScroll from './SemiCircleScroll'


export default function Community() {
  return (
   <>
   <HeroSection/>
   <SemiCircleScroll/>
   <AboutCommunity/>
   <WorkshopFormat/>
   <WhyWeExist/>
   <HowToJoinPath/>
   <WhatWeLookFor/>
   <ExpertCallForm/>
   <LedBy/>
   </>
  )
}
