import { FC } from 'react'
import LandingSection from './(sections)/LandingSection'
import EventsSection from './(sections)/EventsSection'

const HomePage: FC = () => {
  return ( 
    <>
      <LandingSection />
      <EventsSection />
    </>
  )
}

export default HomePage