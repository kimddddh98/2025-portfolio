'use client'
import { PAGES } from '@/const/router.const'
import NavButton from './navButton'
import NavHomeBtn from './navHomeBtn'
import { usePathname, useRouter } from 'next/navigation'
import { usePageActions } from '@/store/usePageStore'

const NavBar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { setAnimationDirection } = usePageActions()
  const handleRouter = (href: string) => {
    const currentIndex = PAGES.indexOf(pathname)
    const clickIndex = PAGES.indexOf(href)

    if (clickIndex > currentIndex) {
      setAnimationDirection('right')
    }
    if (clickIndex < currentIndex) {
      setAnimationDirection('left')
    }

    router.push(href)
  }
  return (
    <nav className="flex items-center gap-20 px-10 py-5">
      <NavHomeBtn />
      <div className="flex flex-1 justify-between">
        {PAGES.map((p) => (
          <NavButton
            key={p}
            text={p.slice(1).charAt(0).toLocaleUpperCase() + p.slice(2)}
            href={p}
            onClick={handleRouter}
          />
        ))}
      </div>
    </nav>
  )
}

export default NavBar
