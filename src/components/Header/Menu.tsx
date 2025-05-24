import { CiMenuBurger } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="bg-light_blue text-white flex text-md px-7 py-2 space-x-4">
        <a href="#" className="hover:text-amber-500 flex items-center gap-1">
          <CiMenuBurger color="white" size={18} />
          <span>All</span>
        </a>
        <a href="#" className="hover:text-amber-500">Today's Deals</a>
        <a href="#" className="hover:text-amber-500">Registry</a>
        <a href="#" className="hover:text-amber-500">Prime Video</a>
        <a href="#" className="hover:text-amber-500">Gift Cards</a>
        <a href="#" className="hover:text-amber-500">Customer Service</a>
        <a href="#" className="hover:text-amber-500">Sell</a>
    </div>
  )
}

export default Menu