import { Link } from "react-router";
import {filterOptions} from "../../utils/filterOptions"
import { useState } from "react";


export default function OnlineFoodRestaurant({ data1, data2 }) {
  const restaurants = data2?.gridElements?.infoWithStyle?.restaurants;

  const [Filters,setFilters]=useState({
    deliveryTime:false,
    offers:false,
    Ratings:false,
    price300to600:false,
    priceLess300:false
  })

const filterKeyMap = {
  "Delivery Time": "deliveryTime",
  "Offers": "offers",
  "ratings4.0+": "Ratings",
  "Rs. 300-Rs. 600": "price300to600",
  "Less than Rs. 300": "priceLess300"
};


const handleFilterClick = (key) => {
  const stateKey = filterKeyMap[key];
  setFilters((prev) => ({
    ...prev,
    [stateKey]: !prev[stateKey],
  }));
};

let FilteredRestaurants = restaurants;

if (Filters.deliveryTime) {
  FilteredRestaurants = [...restaurants].sort((rest1, rest2) => {
    const time1 = rest1?.info?.sla?.deliveryTime; // e.g., "35-40 mins" → 35
    const time2 = rest2?.info?.sla?.deliveryTime;
    return time1 - time2;
  });
}
if(Filters.offers){
  FilteredRestaurants=restaurants.filter((rest)=>(
    "aggregatedDiscountInfoV3" in rest?.info
  ))
}
if(Filters.Ratings){
  FilteredRestaurants = restaurants.filter((rest)=>{
    return rest?.info?.avgRating>4.0
  })
}
if (Filters.price300to600) {
  FilteredRestaurants = restaurants.filter((rest) => {
    const priceStr = rest?.info?.costForTwo || "";
    const price = parseInt(priceStr.replace(/[^\d]/g, "")); // Extracts number
    return price >= 300 && price <= 600;
  });
}
if (Filters.priceLess300) {
  FilteredRestaurants = restaurants.filter((rest) => {
    const priceStr = rest?.info?.costForTwo || "";
    const price = parseInt(priceStr.replace(/[^\d]/g, "")); // Extracts number
    return price < 300;
  });
}



  return (
    <div className=" mx-auto mt-7">
      <h1 className="text-2xl font-bold mb-6" >{data1?.title}</h1>


      {/* data filternation section */}
      <div className="flex justify-between mt-2 mb-7 w-[50%]">
      {
        filterOptions.map((filter)=>{
          return <button className={`border rounded-xl px-2 mr-2 border-gray-300 ${Filters[filterKeyMap[filter]] ? "bg-gray-200":"bg-white"}`} onClick={()=>handleFilterClick(filter)}>{filter}</button>
        })
      }
</div>


      {/* all cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FilteredRestaurants?.map((rest) => {
          const info = rest?.info;
          const discount = info?.aggregatedDiscountInfoV3;

          return (
            <Link to={`/restaurants/${info.id}`}>
              <div
                key={info?.id}
                className="rounded-xl overflow-hidden shadow-md transform transition-transform hover:scale-95 border border-gray-200"
              >
                <div className="relative">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}
                    alt={info?.name}
                    className="w-full h-[160px] object-cover"
                  />
                  {discount?.header && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                      {discount?.header}
                      {discount?.subHeader && (
                        <span className="ml-1">{discount?.subHeader}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <h2 className="font-bold text-lg mb-1 truncate">
                    {info?.name}
                  </h2>
                  <p className="text-sm text-gray-700 mb-1">
                    ⭐ {info?.avgRating} • {info?.sla?.slaString}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {info?.cuisines?.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">{info?.areaName}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
