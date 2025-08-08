import { CiMenuBurger } from "react-icons/ci";

interface MenuProps {
  mobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const Menu = ({ mobile = false, isOpen = false, onClose }: MenuProps) => {
  return (
    <div
      className={
        mobile
          ? `fixed top-0 left-0 h-full w-[250px] bg-light_blue text-white shadow-lg z-50 
             transform transition-transform duration-300 ease-in-out 
             ${isOpen ? "translate-x-0" : "-translate-x-full"} 
             flex flex-col space-y-3 px-5 py-4`
          : "bg-light_blue text-white flex text-md px-7 py-2 space-x-4"
      }
    >
      {mobile && (
        <button
          className="absolute top-3 right-3 text-white"
          onClick={onClose}
        >
          ✕
        </button>
      )}

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
  );
};

export default Menu;
