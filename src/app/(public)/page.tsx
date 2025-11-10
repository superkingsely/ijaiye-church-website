'use client'
import AboutSection from '@/presentation/components/AboutSection'
import HeroSection from '@/presentation/components/HeroSection'
import { useNavStore } from '@/presentation/stores/navstore'
import NestedAccordion from '@/presentation/components/NestedAccordion'
import React from 'react'

const Page = () => {
  const {closenav}=useNavStore()
  return (
    <div onClick={closenav} className="">
      <HeroSection />
      <AboutSection />
      
      {/* <NestedAccordion /> */}
    </div>
  )
}

export default Page