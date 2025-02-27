import { FC } from 'react'

type Props = {}

const EventsSection: FC = (props: Props) => {
  return (
    <section className="wrapper my-8 xl:my-16 flex flex-col gap-8 md:gap-12">
      <h2 className="font-bold text-3xl leading-10 lg:text-4xl lg:leading-normal xl:text-4xl xl:leading-normal">
        The Best Event Booking Site In Zimbabwe
      </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row lg:flex-row xl:flex-row">
        Search
        CategoryFilter
        EventList
      </div>
    </section>
  )
}

export default EventsSection