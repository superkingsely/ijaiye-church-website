'use client'
import AboutSection from '@/presentation/components/AboutSection'
import HeroSection from '@/presentation/components/HeroSection'
import { useNavStore } from '@/presentation/stores/navstore'
import NestedAccordion from '@/presentation/components/NestedAccordion'
import React from 'react'
import Footer from '@/presentation/components/Footer'

const Page = () => {
  const {toggle}=useNavStore()
  return (
    <div onClick={toggle} className="border">
      <HeroSection />
      <AboutSection />
      <Footer />
      {/* <NestedAccordion /> */}
    </div>
  )
}

export default Page