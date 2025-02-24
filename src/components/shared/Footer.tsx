import Link from 'next/link'
import { FC } from 'react'

type Props = {}

const Footer: FC = (props: Props) => {
  return (
    <footer className="wrapper flex py-10 flex-between flex-col md:flex-row gap-5 items-center border-t">
      <Link href="/">
        <h2 className="font-bold text-lg">TicketHub ZW</h2>
      </Link>
      <p className="text-xs text-gray-500 font-thin">&copy; TicketHub ZW - 2025</p>
    </footer>
  )
}

export default Footer