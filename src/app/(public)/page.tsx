'use client'
import AboutSection from '@/presentation/components/AboutSection'
import HeroSection from '@/presentation/components/HeroSection'
import { useNavStore } from '@/presentation/stores/navstore'
import NestedAccordion from '@/presentation/components/NestedAccordion'
import React from 'react'

const Page = () => {
  const {toggle}=useNavStore()
  return (
    <div onClick={toggle} className="border">
      <HeroSection />
      <AboutSection />
      <NestedAccordion />
    </div>
  )
}

export default Page