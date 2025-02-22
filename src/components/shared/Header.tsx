import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logo from '@/assets/images/logo.svg'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const Header: FC = (props: Props) => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} alt="TicketHub Logo" width={128} height={38} />
        </Link>

        <UserButton showName />

        {/* <div className="flex w-32 justify-end gap-3">
          <div></div>
        </div> */}
      </div>
    </header>
  )
}

export default Header