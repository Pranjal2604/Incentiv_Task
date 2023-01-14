import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import Infosection from '../../components/whyincentiv'
import Offersection from '../../components/Offersection'
import Dashboard from '../../components/Dashboard'
const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Infosection/>
    <Offersection/>
    <Dashboard/>
    <Footer/>
    </>
  )
}

export default LandingPage
