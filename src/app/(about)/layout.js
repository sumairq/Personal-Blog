import InsightRoll from '@/src/components/About/InsightRoll'
import React from 'react'

const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "Open Source Developer @ NDA'd contributor Mozilla ",
    "Graduated from Microverse 🏆",
    "Remote work advocate."
  ];            

const AboutLayout = ({children}) => {
  return <main className='w-full flex flex-col items-center justify-between'>
    <InsightRoll insights={insights}/>
    {children}
  </main>
} 

export default AboutLayout