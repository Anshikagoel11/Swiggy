import { useSelector } from "react-redux";
import { useState } from "react";
import MenuCard from "./MenuCard";


export default function ResaurantItems() {
  const [veg, setVeg] = useState(null);
  const [Bestseller, setBestseller] = useState(false);
  const { data } = useSelector((state) => state.SingleRestaurant);

  const tempData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filterData = tempData?.filter(
    (item) => "title" in item?.card?.card
  );

  return (
    <div className="w-full flex flex-col items-center m-auto py-6">
      <div className="mb-6">
        <button
          className={`rounded border px-2 py-1 mr-3 text-sm ${veg !== true ? "text-green-600" : "text-white bg-green-600"}`}
          onClick={() => { veg === true ? setVeg(null) : setVeg(true) }}
        >
          Veg
        </button>
        <button
          className={`rounded border px-2 py-1 mr-3 text-sm ${veg !== false ? "text-red-600" : "text-white bg-red-600"}`}
          onClick={() => { veg === false ? setVeg(null) : setVeg(false) }}
        >
          Non-Veg
        </button>
        <button
          className={`rounded border px-2 py-1 mr-3 text-sm ${!Bestseller ? "text-blue-300" : "bg-blue-300 text-white"}`}
          onClick={() => { setBestseller(!Bestseller) }}
        >
          BestSellers
        </button>
      </div>

      <div className="w-[90%] max-w-3xl">
        <hr className="mb-5 text-gray-300" />

        {filterData?.map((menuItems, index) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            isFirst={index === 0}
            veg={veg}
            Bestseller={Bestseller}
          />
        ))}
      </div>
    </div>
  );
}
