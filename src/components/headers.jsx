import { MdLocationOn } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

export default function Headers() {
  return (
    <header className="bg-[#FF5200] text-white font-sans ">


      <div className="max-w-[80%] py-4 px-7 flex items-center justify-between container m-auto ">
        <img
          className="w-40 h-22 object-contain"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="logo"
        />

        <nav className="flex items-center gap-8 text-xl font-semibold">
          <a href="https://www.swiggy.com/corporate/" target="_blank" rel="noreferrer">
            Swiggy Corporate
          </a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" rel="noreferrer">
            Partner with us
          </a>
          <a className="border-1 rounded-2xl px-4 py-5" href="#">
            Get the App
          </a>
          <a className="border-1 rounded-2xl px-9 py-5 bg-black" href="#">Sign in</a>
        </nav>
      </div>


     <div className="relative w-full pt-16 pb-8 flex flex-col items-center gap-6">
        <img className="h-110 w-62 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        <img className="h-110 w-62 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
  <div className="w-[55%] text-6xl font-bold text-white text-center">
    Order food & groceries. Discover best restaurants. Swiggy it!
  </div>


  <div className=" flex justify-center container m-auto pt-6">

<div className="bg-white flex px-4 justify-center border-1 rounded-2xl items-center mr-1">  
    <MdLocationOn className="w-8 h-8 text-[#FF5200]" />
    <input type="text" placeholder="Delhi,India" className="h-[60px] w-[208.8px] bg-white text-black font-bold text-2xl"/>
    <RiArrowDropDownLine className="w-8 h-8 text-black" />

</div>


<div className="bg-white flex h-[62px] w-[484px] px-4 justify-between border-1 rounded-2xl items-center">  
    <input type="text" placeholder="Search for restaurant, item or more" className="w-[310px] h-[22px] text-black font-bold text-xl"/>
    <CiSearch className="w-5 h-5 text-black" />

</div>
<input type="text" />

  </div>
</div>

    </header>
  );
}