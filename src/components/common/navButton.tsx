import Link from 'next/link'
import navBarStyles from '@/styles/navBar.module.scss'

const NavButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 opacity-90 backdrop-blur-lg ${navBarStyles.apBtn}`}
    >
      <span>{text}</span>
    </Link>
  )
}

export default NavButton
