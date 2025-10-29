import AboutSection from '@/presentation/components/AboutSection'
import HeroSection from '@/presentation/components/HeroSection'
import NestedAccordion from '@/presentation/components/NestedAccordion'
import React from 'react'

const Page = () => {
  return (
    <div className="border">
      <HeroSection />
      <AboutSection />
      <NestedAccordion />
    </div>
  )
}

export default Page