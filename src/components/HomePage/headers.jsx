import { MdLocationOn } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
export default function Headers() {
  return (
    <header className="bg-[#FF5200] text-white font-sans ">
      <div className="max-w-[80%] py-4 px-7 flex items-center justify-between container m-auto ">
        <img
          className="w-40 h-22 object-contain"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="logo"
        />

        <nav className="flex items-center gap-8 text-base font-semibold">
          <a
            href="https://www.swiggy.com/corporate/"
            target="_blank"
            rel="noreferrer"
          >
            Swiggy Corporate
          </a>
          <a
            href="https://partner.swiggy.com/login#/swiggy"
            target="_blank"
            rel="noreferrer"
          >
            Partner with us
          </a>
          <a className="border rounded-2xl px-4 py-3" href="">
            Get the App
          </a>
          <a className="border-1 rounded-2xl px-4 py-3 bg-black" href="">
            Sign in
          </a>
        </nav>
      </div>

      <div className="relative w-full pt-16 pb-8 flex flex-col items-center gap-6">
        <img
          className="h-110 w-64 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
        <img
          className="h-110 w-64 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        <div className="w-[55%] text-5xl font-bold text-white text-center">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        <div className=" flex justify-center container m-auto pt-6">
          <div className="bg-white flex px-4 justify-center border-1 rounded-2xl items-center mr-2">
            <MdLocationOn className="w-8 h-8 text-[#FF5200]" />
            <input
              type="text"
              placeholder="Delhi,India"
              className="h-[60px] w-[208.8px] bg-white text-black text-xl"
            />
            <RiArrowDropDownLine className="w-8 h-8 text-black" />
          </div>

          <div className="bg-white flex h-[60px] w-[484px] px-8 justify-between border-1 rounded-2xl items-center">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="w-[310px] h-[22px] text-black text-xl"
            />
            <CiSearch className="w-5 h-5 text-black" />
          </div>
          <input type="text" />
        </div>
      </div>

      <div className="max-w-[80%] flex scroll-auto container mx-auto">
        <Link to={"/restaurants"}>
        
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
        </Link>
     
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
        </a>
        <a href="https://www.swiggy.com/dineout">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
        </a>
      </div>
    </header>
  );
}
