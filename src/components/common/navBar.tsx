import { PAGES } from '@/const/router.const'
import NavButton from './navButton'
import NavHomeBtn from './navHomeBtn'

const NavBar = () => {
  return (
    <nav className="flex items-center gap-20 px-10 py-5">
      <NavHomeBtn />
      <div className="flex flex-1 justify-between">
        {PAGES.map((p) => (
          <NavButton
            key={p}
            text={p.slice(1).charAt(0).toLocaleUpperCase() + p.slice(2)}
            href={p}
          />
        ))}
      </div>
    </nav>
  )
}

export default NavBar
