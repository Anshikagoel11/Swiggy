import { Link } from "react-router";

export default function OnlineFoodRestaurant({ data1,data2 }) {
  const restaurants = data2?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className=" mx-auto mt-7">
      <h1 className="text-2xl font-bold mb-6">{data1?.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants?.map((rest) => {
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
                <h2 className="font-bold text-lg mb-1 truncate">{info?.name}</h2>
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
