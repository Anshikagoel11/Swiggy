import { MdLocationOn } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <header className="bg-[#FF5200] text-white font-sans">
      {/* Top Navbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 py-4 gap-4">
        <img
          className="w-32 sm:w-40 h-auto object-contain"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="Swiggy logo"
        />

        <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-3 text-sm sm:text-base font-semibold">
          <a
            href="https://www.swiggy.com/corporate/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Swiggy Corporate
          </a>
          <a
            href="https://partner.swiggy.com/login#/swiggy"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Partner with us
          </a>
          <a
            href="#"
            className="border border-white rounded-2xl px-3 py-2 hover:bg-white hover:text-[#FF5200] transition"
          >
            Get the App
          </a>
          <a
            href="#"
            className="border border-white rounded-2xl px-3 py-2 bg-black hover:bg-gray-800 transition"
          >
            Sign in
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center px-4 sm:px-6 pt-10 pb-6 sm:pt-16 sm:pb-10 gap-4 sm:gap-6 text-center">
        {/* Background Images (Desktop Only) */}
        <img
          className="hidden lg:block h-[440px] w-64 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies"
        />
        <img
          className="hidden lg:block h-[440px] w-64 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi"
        />

        <h1 className="w-full sm:w-[90%] lg:w-[60%] text-2xl sm:text-4xl lg:text-5xl font-bold">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </h1>

        {/* Search + Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-5xl">
          {/* Location Input */}
          <div className="flex items-center border rounded-2xl bg-white w-full sm:w-auto px-4">
            <MdLocationOn className="text-[#FF5200] w-6 h-6" />
            <input
              type="text"
              placeholder="Delhi, India"
              className="h-12 sm:h-14 w-full sm:w-48 text-black px-2 outline-none text-sm sm:text-base"
            />
            <RiArrowDropDownLine className="text-black w-6 h-6" />
          </div>

          {/* Search Input */}
          <div className="flex items-center border rounded-2xl bg-white w-full sm:w-[350px] lg:w-[420px] px-4">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="h-12 sm:h-14 w-full text-black outline-none text-sm sm:text-base"
            />
            <CiSearch className="text-black w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Banner Section */}
     <div className="grid grid-cols-2 sm:flex justify-center items-center gap-4 px-4 pb-6">
  <Link to="/restaurants">
    <img
      className="w-full sm:w-72 md:w-80 h-auto object-cover rounded-lg"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
      alt="Restaurants"
    />
  </Link>
  <a href="https://www.swiggy.com/instamart">
    <img
      className="w-full sm:w-72 md:w-80 h-auto object-cover rounded-lg"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
      alt="Instamart"
    />
  </a>
  <a href="https://www.swiggy.com/dineout">
    <img
      className="w-full sm:w-72 md:w-80 h-auto object-cover rounded-lg"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
      alt="Dineout"
    />
  </a>
</div>

    </header>
  );
}
