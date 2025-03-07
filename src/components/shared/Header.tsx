import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logo from '@/assets/images/logo.svg'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import NavItems from '@/components/shared/NavItems'
import MobileNav from '@/components/shared/MobileNav'

const Header: FC = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} alt="TicketHub Logo" width={128} height={38} />
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header