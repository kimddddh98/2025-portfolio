import NavButton from './navButton'
import NavHomeBtn from './navHomeBtn'

const NavBar = () => {
  return (
    <nav className="flex items-center gap-20 px-10 py-5">
      <NavHomeBtn />
      <div className="flex flex-1 justify-between">
        <NavButton text="Project" href="/project" />
        <NavButton text="About" href="/about" />
        <NavButton text="Skill" href="/skill" />
        <NavButton text="Contact" href="/project" />
        <NavButton text="More" href="/project" />
      </div>
    </nav>
  )
}

export default NavBar
