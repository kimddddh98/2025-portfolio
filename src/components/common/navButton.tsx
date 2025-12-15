'use client'
import Link from 'next/link'
import navBarStyles from '@/styles/navBar.module.scss'
import { usePathname } from 'next/navigation'

const NavButton = ({ text, href }: { text: string; href: string }) => {
  const pathName = usePathname()
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 opacity-90 backdrop-blur-lg ${navBarStyles.apBtn} ${pathName === href && navBarStyles.focus} `}
    >
      <span>{text}</span>
    </Link>
  )
}

export default NavButton
