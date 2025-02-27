import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

type Props = {}

const HomePage: FC = (props: Props) => {
  return ( 
    <section className="bg-stone-50 wrapper xs:py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-10 md:gap-16">
          <h1 className="text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-10 md:leading-normal lg:leading-normal">
            Experience The Ultimate Convenience: Buy Your Next Ticket With Us!
          </h1>
          <p className="p-regular-20">
            Book your ticket with us and stand a chance to win!
          </p>
          <Button size="lg" asChild className="rounded-full h-14 text-base text-white hover:bg-transparent hover:text-black border-[3px] border-orange-500 hover:transition-all hover:duration-700 font-normal leading-6 w-full sm:w-fit bg-orange-500">
            <Link href="#events">
              Explore Our Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomePage