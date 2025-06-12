import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRestData } from "../../Redux/SingleRestSlicer";

export default function ResaurantHeader({ id }) {
   const {data}= useSelector((state)=>state.SingleRestaurant)
  //    const {data , loading,error}= useSelector((state)=>state.SingleRestaurant)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRestData(id))
  // },[id]);
// console.log("data is->",data)

  const finalData = data?.data?.cards?.[2]?.card?.card?.info;
  const finalData2 =
    data?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  return (
    <div className="w-[90%] sm:w-[70%] mt-10 mx-auto p-3 sm:p-4 max-w-4xl">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-1">
        Home / Restaurants / {finalData?.name}
      </div>

      {/* Main Content */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          {finalData?.name}
        </h1>

        <div className="border border-gray-300 rounded-xl p-4 sm:p-5 shadow-md">
          <div className="flex flex-wrap items-center mb-2 text-sm">
            <span className="font-semibold mr-2">{finalData?.avgRating}</span>
            <span className="text-gray-600 mr-2">
              ({finalData?.totalRatingsString})
            </span>
            <span className="text-gray-600">
              {finalData?.costForTwoMessage}
            </span>
          </div>

          <div className="text-sm text-orange-500 mb-1">
            {finalData?.cuisines?.join(", ")}
          </div>

          <div className="text-sm mb-1">
            Outlet <span className="font-medium">{finalData?.areaName}</span> ▼
          </div>

          <div className="text-sm">{finalData?.sla?.slaString}</div>
        </div>
      </div>

      {/* Deals Section */}
      <div className="mb-5">
        <h2 className="font-bold text-lg mb-4">Deals for you</h2>
        <div className="flex overflow-x-auto gap-3 pb-1">
          {finalData2?.map((deal, index) => (
            <div
              key={`${deal?.info?.restId}-${index}`}
              className="flex-shrink-0 border border-gray-200 rounded-md p-2 min-w-[200px]"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8">
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">
                    {deal?.info?.header}
                  </div>
                  <div className="text-xs text-gray-500">
                    {deal?.info?.primaryDescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <div className="text-center mt-8 mb-6 text-base font-semibold">MENU</div>

      <Link to={`/restaurants/${id}/search`}>
        <button className="bg-gray-200 w-full py-2 text-sm rounded-md">
          Search for dishes
        </button>
      </Link>
    </div>
  );
}
