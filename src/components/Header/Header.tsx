import Menu from "./Menu"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="w-full flex flex-col h-fit">
        <Navbar />
        <Menu />
    </header>
  )
}

export default Header