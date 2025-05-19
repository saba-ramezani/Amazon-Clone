import { IoLocationOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {
  return (
    <header className='fixed z-[1000] top-0 w-full flex h-[70px] bg-DEFAULT'>
        <div className='ml-[20px] w-fit h-full flex items-center'>
            <img className='h-[40px] object-cover' src="/images/amazon.png" alt="" />
        </div>
        <div className="flex flex-col h-full items-start justify-center ml-[20px]">
            <p className="text-gray-400 text-[13px] ml-[20px] leading-4">Deliver to</p>
            <div className="flex items-center">
                <IoLocationOutline size={20} color="white" />
                <p className="text-white text-[15px] font-semibold">United Kingdom</p>
            </div>
        </div>
        <div className="flex h-full items-center justify-center ml-[20px] gap-1">
            <GrLanguage size={20} color="white" />
            <p className="text-white text-[15px]">English</p>
        </div>
        <div className="flex flex-col h-full items-start justify-center ml-[20px]">
            <p className="text-gray-300 text-[13px] leading-4">Hello, sign in</p>
            <div className="flex items-center">
                <p className="text-white text-[15px] font-semibold">Accounts & Lists</p>
            </div>
        </div>
        <div className="flex flex-col h-full items-start justify-center ml-[20px]">
            <p className="text-gray-300 text-[13px] leading-4">Returns</p>
            <div className="flex items-center">
                <p className="text-white text-[15px] font-semibold">& Orders</p>
            </div>
        </div>
        <div className="flex h-full items-center justify-center ml-[20px] gap-1">
            <FaCartShopping  size={40} color="Orange" />
            <p className="text-white text-[16px] font-semibold mt-[20px]">Cart</p>
        </div>
    </header>
  )
}

export default Navbar