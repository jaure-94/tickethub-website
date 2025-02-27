import { FC } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import menu from "@/assets/icons/menu.svg"
import NavItems from './NavItems'


type Props = {}

const MobileNav: FC = (props: Props) => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={menu}
            alt="Menu Icon"
            width={34}
            height={34}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="bg-white md:hidden max-w-sm">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">TH</h2>
              <hr className="border border-gray-100" />
              <NavItems />
            </div>
            <p className="text-xs text-gray-500">&copy; TicketHub ZW - 2025</p>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav