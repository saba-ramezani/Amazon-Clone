import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Search from "./Search";
import type { RootState } from "../../redux/store";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  const productsNumber = useSelector((state: RootState) => state.cart.productsNumber);

  return (
    <>
      <div className="w-full bg-DEFAULT px-4 py-2 flex flex-col gap-2 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="text-white" onClick={onMenuToggle}>
              <CiMenuBurger size={25} />
            </button>
            <Link to="/" className="hover:scale-105 transition flex-shrink-0">
              <img
                className="h-[35px] object-contain max-w-[90px]"
                src="/images/amazon.png"
                alt="logo"
              />
            </Link>
          </div>

          <Link
            to="/checkout"
            className="relative flex items-center hover:scale-105 transition flex-shrink-0"
          >
            <FaCartShopping size={32} color="orange" />
            <div className="absolute top-[-5px] right-[-10px] bg-white text-black px-1 rounded-full text-xs font-bold min-w-[18px] text-center">
              {productsNumber}
            </div>
          </Link>
        </div>

        <div className="w-full">
          <Search />
        </div>
      </div>

      <div className="hidden md:flex w-full items-center justify-between h-[70px] bg-DEFAULT px-4 gap-4">
        <div className="flex items-center gap-3 flex-shrink-0 hover:scale-105 transition">
          <Link to="/">
            <img
              className="h-[40px] object-contain max-w-[100px]"
              src="/images/amazon.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex flex-col items-start hover:scale-105 transition flex-shrink-0">
          <p className="text-gray-400 text-[13px] leading-4">Deliver to</p>
          <div className="flex items-center">
            <IoLocationOutline size={20} color="white" />
            <p className="text-white text-[15px] font-semibold">United Kingdom</p>
          </div>
        </div>

        <div className="flex-1 min-w-[150px]">
          <Search />
        </div>

        <div className="flex items-center gap-5 flex-shrink-0">
          <div className="lg:flex hidden items-center hover:scale-105 transition gap-1">
            <GrLanguage size={20} color="white" />
            <p className="text-white text-[15px]">English</p>
          </div>
          <div className=" lg:flex hidden flex-col hover:scale-105 transition">
            <p className="text-gray-300 text-[13px] leading-4">Hello, sign in</p>
            <p className="text-white text-[15px] font-semibold">Accounts & Lists</p>
          </div>
          <div className=" lg:flex hidden flex-col hover:scale-105 transition">
            <p className="text-gray-300 text-[13px] leading-4">Returns</p>
            <p className="text-white text-[15px] font-semibold">& Orders</p>
          </div>
        </div>

        <Link
          to="/checkout"
          className="relative flex items-center hover:scale-105 transition flex-shrink-0"
        >
          <FaCartShopping size={38} color="orange" />
          <div className="absolute top-[-5px] right-[-10px] bg-white text-black px-2 py-0.5 rounded-full text-xs font-bold min-w-[20px] text-center">
            {productsNumber}
          </div>
          <p className="text-white text-[16px] font-semibold ml-2">Cart</p>
        </Link>
      </div>
    </>
  );
};




export default Navbar;
