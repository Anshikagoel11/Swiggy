
import { useSelector } from "react-redux";
export default function ResaurantHeader(){
    

     const {data}= useSelector((state)=>state.SingleRestaurant)

     const finalData = data?.data?.cards?.[2]?.card?.card?.info;
    const finalData2 = data?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

    return(
        
        <div className="w-[60%] mt-15 container max-w-4xl mx-auto p-4 ">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-2 ">
                Home/Restauants/{finalData?.name}
            </div>

            {/* Main Content */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">{finalData?.name}</h1>
                
               <div className=" border border-gray-400 rounded-2xl p-5 font-bold  shadow-xl">
                 <div className="flex items-center mb-2  ">
                    <span className="font-bold mr-1">{finalData?.avgRating}</span>
                    <span className="text-sm  mr-2">
                        ({finalData?.totalRatingsString})
                    </span>
                    <span className="text-sm">
                        {finalData?.costForTwoMessage}
                    </span>
                </div>
                
                <div className="text-sm text-orange-500 mb-2">
                    {finalData?.cuisines?.join(", ")}
                </div>
                
                <div className="text-sm  mb-4">
                    Outlet <span className="font-medium">{finalData?.areaName}</span> ▼
                </div>
                
                <div className="text-sm  mb-4">
                   {finalData?.sla?.slaString}
                </div>
               </div>
            </div>

            {/* Deals Section - Horizontally Scrollable */}
            <div className="mb-6">
                <h2 className="font-bold text-[20px] mb-5">Deals for you</h2>
                <div className="flex overflow-x-auto gap-3 pb-2">
                    {finalData2?.map((deal,index) => (
                        <div key={`${deal?.info?.restId}-${index}`} className="flex-shrink-0 border border-gray-200 rounded-lg p-3 mt-4 mb-5">
                            <div className="flex items-center">
                               
                                <div className="h-10 mr-3 w-10">
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic" alt="" />
                                </div>
                                <div>
                                    <div className="font-medium">{deal?.info?.header}</div>
                                    <div className="text-xs text-gray-500">{deal?.info?.primaryDescription}</div>
                                </div>
                            </div>
                            {/* add options here  */}



                        </div>
                    ))}
                </div>
            </div>



<div className="text-center mt-10 mb-10">
   MENU
</div>
            {/* Menu Button */}
            <input className=" bg-gray-200  w-full py-3  text-center font-bold rounded-lg mb-6" placeholder="Search for dishes"/>
           
        </div>
    )
}