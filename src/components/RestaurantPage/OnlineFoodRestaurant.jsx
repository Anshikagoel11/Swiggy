import { Link } from "react-router";
import { filterOptions } from "../../utils/filterOptions";
import { useState } from "react";

export default function OnlineFoodRestaurant({ data1, data2 }) {
  const restaurants = data2?.gridElements?.infoWithStyle?.restaurants;

  const [Filters, setFilters] = useState({
    deliveryTime: false,
    offers: false,
    Ratings: false,
    price300to600: false,
    priceLess300: false,
  });

  const filterKeyMap = {
    "Delivery Time": "deliveryTime",
    Offers: "offers",
    "ratings4.0+": "Ratings",
    "Rs. 300-Rs. 600": "price300to600",
    "Less than Rs. 300": "priceLess300",
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
    FilteredRestaurants = [...restaurants].sort((a, b) => {
      return a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime;
    });
  }
  if (Filters.offers) {
    FilteredRestaurants = restaurants.filter(
      (rest) => "aggregatedDiscountInfoV3" in rest?.info
    );
  }
  if (Filters.Ratings) {
    FilteredRestaurants = restaurants.filter(
      (rest) => rest?.info?.avgRating > 4.0
    );
  }
  if (Filters.price300to600) {
    FilteredRestaurants = restaurants.filter((rest) => {
      const price = parseInt(rest?.info?.costForTwo.replace(/[^\d]/g, ""));
      return price >= 300 && price <= 600;
    });
  }
  if (Filters.priceLess300) {
    FilteredRestaurants = restaurants.filter((rest) => {
      const price = parseInt(rest?.info?.costForTwo.replace(/[^\d]/g, ""));
      return price < 300;
    });
  }

  return (
    <div className="mx-auto mt-6 px-3 sm:px-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-5">{data1?.title}</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-5 w-full sm:w-[90%]">
        {filterOptions.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(filter)}
            className={`text-xs border rounded-xl px-2 py-1 border-gray-300 ${
              Filters[filterKeyMap[filter]] ? "bg-gray-200" : "bg-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Restaurant Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

        {FilteredRestaurants?.map((rest) => {
          const info = rest?.info;
          const discount = info?.aggregatedDiscountInfoV3;

          return (
            <Link to={`/restaurants/${info.id}`} key={info?.id}>
              <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transform transition-transform hover:scale-95 border border-gray-200 bg-white">
                <div className="relative">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}
                    alt={info?.name}
                    className="w-full h-[120px] sm:h-[140px] md:h-[180px] object-cover"
                  />
                  {discount?.header && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">
                      {discount?.header}
                      {discount?.subHeader && (
                        <span className="ml-1">{discount?.subHeader}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-2 sm:p-3">
                  <h2 className="font-bold text-sm sm:text-base mb-1 truncate">
                    {info?.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 mb-1">
                    ⭐ {info?.avgRating} • {info?.sla?.slaString}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {info?.cuisines?.join(", ")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {info?.areaName}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
