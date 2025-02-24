"use client"

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

type Props = {}

const NavItems: FC = (props: Props) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-between w-full items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-orange-700"
            } flex-center p-medium-16 whitespace-nowrap`}
            >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems