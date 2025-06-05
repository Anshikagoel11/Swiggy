import { Link } from "react-router";

export default function TopRestaurant({ data }) {
  const RestData = data?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="mb-15">
      <h1 className="font-bold text-[24px] mb-7 mt-10">
        {data?.header?.title}
      </h1>

      <div className="flex gap-6 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {RestData?.map((rest) => {
          const info = rest?.info;
          const discount = info?.aggregatedDiscountInfoV3;

          return (
            
            <div
              key={info?.id}
              className="min-w-[250px] rounded-xl overflow-hidden border hover:shadow-md transform hover:scale-95 transition-transform duration-300 border-gray-200"
            >
              <Link to={`/restaurants/${info.id}`}>
              <div className="relative">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}
                  alt={info?.name}
                  className="w-full h-[160px] object-cover"
                />
                {discount?.header && (
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    ₹{discount?.header}
                    {discount?.subHeader && (
                      <span className="ml-1">{discount?.subHeader}</span>
                    )}
                  </div>
                )}
              </div>

              <div className="p-2">
                <div className="text-[15px] truncate font-bold text-2xl">
                  {info?.name}
                </div>
                <div className="text-[16px]">
                  ⭐ {info?.avgRating} • {info?.sla?.slaString}
                </div>
                <div className="text-gray-700 overflow-hidden w-200">
                  {info.cuisines.join(", ")}
                </div>
                <div className="text-gray-700 overflow-hidden w-200">
                  {info.areaName}
                </div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
