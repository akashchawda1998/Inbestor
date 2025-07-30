import React from 'react'
import StepsSection from './Steps'
import Breadcumb from './Breadcumb'
import ReportsSection from './ReportsSection'
import WorkshopFormat from '../Community/WorkshopFormat'
import WhyWeExist from './WhyWeExist'
import VelocityPortfolio from './stockPortfolio'
import Pricing from './pricing'
import ExpertCallForm from './ExpertCallForm'
import TrustedClients from './TrustedClients'
import FAQSection from './faq'

export default function Portfolio() {
  return (
   <>
   <Breadcumb/>
   <StepsSection/>
   <VelocityPortfolio/>
   <Pricing/>
   {/* <ReportsSection/> */}
   <ExpertCallForm/>
   {/* <TrustedClients/>/ */}
   <FAQSection/>
   
   </>
  )
}
