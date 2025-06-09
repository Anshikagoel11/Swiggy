import { Link } from "react-router";

export default function TopRestaurant({ data }) {
  const RestData = data?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="mb-10 px-2 sm:px-4">
      <h1 className="font-bold text-lg sm:text-xl mb-5 mt-8 sm:mt-10">
        {data?.header?.title}
      </h1>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {RestData?.map((rest) => {
          const info = rest?.info;
          const discount = info?.aggregatedDiscountInfoV3;

          return (
            <div
              key={info?.id}
              className="min-w-[190px] sm:min-w-[200px] rounded-lg overflow-hidden border hover:shadow-md transform hover:scale-95 transition-transform duration-300 border-gray-200 bg-white"
            >
              <Link to={`/restaurants/${info.id}`}>
                <div className="relative">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}
                    alt={info?.name}
                    className="w-full h-[120px] sm:h-[140px] object-cover"
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
                  <h2 className="text-sm sm:text-base font-semibold truncate mb-1">
                    {info?.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 mb-1">
                    ⭐ {info?.avgRating} • {info?.sla?.slaString}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {info.cuisines.join(", ")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {info.areaName}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
