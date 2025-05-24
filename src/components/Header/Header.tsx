import Menu from "./Menu"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="fixed z-[1000] top-0 w-full flex flex-col h-fit">
        <Navbar />
        <Menu />
    </header>
  )
}

export default Header