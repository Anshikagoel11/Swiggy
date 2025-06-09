import { MdCorporateFare } from "react-icons/md";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useState } from "react";

export default function RestHeader() {
  const totalItems = useSelector((state) => state.cartSlicer.totalItemsInCart);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b shadow-md border-gray-300 px-[5%] py-3 bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          className="w-32 sm:w-36 md:w-40 h-10 object-contain"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/11/swiggy_logo-freelogovectors.net_.png"
          alt="logo"
        />

        {/* Desktop Menu */}
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
          <Link to={"/checkOut"}>
            <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
              <FaCartPlus />
              <span>Cart({totalItems})</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <MdCorporateFare />
            <span>Corporate</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSearch />
            <span>Search</span>
          </div>
          <div className="flex items-center gap-2">
            <BiSolidOffer />
            <span>Offers</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdHelpCircle />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-2">
            <MdAccountCircle />
            <span>Sign In</span>
          </div>
          <Link to={"/checkOut"}>
            <div className="flex items-center gap-2">
              <FaCartPlus />
              <span>Cart({totalItems})</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
