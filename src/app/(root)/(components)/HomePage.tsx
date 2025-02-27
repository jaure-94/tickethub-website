import { FC } from 'react'
import LandingSection from './(sections)/LandingSection'
import EventsSection from './(sections)/EventsSection'

type Props = {}

const HomePage: FC = (props: Props) => {
  return ( 
    <>
      <LandingSection />
      <EventsSection />
    </>
  )
}

export default HomePage