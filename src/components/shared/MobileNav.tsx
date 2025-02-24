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
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <h2 className="text-2xl font-bold">TH</h2>
          <hr className="border border-gray-100" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav