import { MdCorporateFare } from "react-icons/md";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router";



export default function RestHeader() {
  const totalItems = useSelector((state)=>state.cartSlicer.totalItemsInCart)
  return (
    <div className="flex justify-between items-center border-b shadow-md border-gray-300 px-[5%] py-3 bg-white">
      {/* Logo */}
      <div>
        <img
          className="w-32 sm:w-36 md:w-40 h-10 object-contain"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/11/swiggy_logo-freelogovectors.net_.png"
          alt="logo"
        />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex gap-6 items-center text-[15px] font-medium text-gray-700">
        <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
          <MdCorporateFare />
          <span>Corporate</span>
        </div>
        <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
          <FaSearch />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
          <BiSolidOffer />
          <span>Offers</span>
        </div>
        <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
          <IoMdHelpCircle />
          <span>Help</span>
        </div>
        <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
          <MdAccountCircle />
          <span>Sign In</span>
        </div>
        <Link to={"/checkOut"}><div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
          <FaCartPlus />
          <span>Cart({totalItems})</span>
        </div></Link>
      </div>

      {/* Optional: Mobile Menu Icon */}
      <div className="md:hidden">
        {/* Add hamburger icon or dropdown for mobile menu */}
      </div>
    </div>
  );
}
