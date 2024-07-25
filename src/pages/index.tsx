import Navbar from '@/sections/Navbar'
import SocialIcons from '@/components/Socialicons'
import Email from '@/components/Email'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

import React from 'react'

function Index() {
  return (
    <div>
      <Navbar />
      <SocialIcons />
      <Email />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Index
