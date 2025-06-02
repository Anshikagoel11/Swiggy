import { FcRating } from "react-icons/fc";

export default function RestaurantCard({ restaurant }) {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restaurant?.info?.mediaFiles[0]?.url}`;
  const cuisines = restaurant.info.cuisines.join(" • ");
  const address = restaurant.info.locationInfo.formattedAddress;
  const distance = restaurant.info.locationInfo.distanceString;
  const cost = restaurant.info.costForTwo;
  const offer = restaurant.info.offerInfoV3?.vendorOffer;
 const off = restaurant.info.customerOffer.info.description;
 const link = restaurant.cta.link

  return (
     <a href={link}>
    <div className="font-bold w-80 min-w-[300px] max-w-sm bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 mt-2">
       
      <div className="relative h-44">
        <img
          src={imageUrl}
          alt="restaurant"
          className="h-full w-full object-cover"
        />
        <div className=" flex justify-between  text-white absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full px-3 py-2">
          <h2 className=" text-lg ">
            {restaurant.info.name}
          </h2>
          <div>
<span className="flex items-center gap-1">
            <FcRating />
            {restaurant.info.rating.value}
          </span>
          </div>
        </div>
      </div>

      <div className="p-4 text-sm space-y-2 text-gray-700 text-[12px]">
        <div className="flex justify-between">
            <h3> {cuisines}</h3>         
            <span>{cost}</span>
        </div>

        <div className="text-gray-500 flex justify-between">
<div>{address}</div>
<span>{distance}</span>
        </div>

        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="bg-gray-200  px-2 py-1 rounded-full">
            Table booking
          </span>
          <span className="bg-gray-200  px-2 py-1 rounded-full">
            Buffet
          </span>
        </div>
          <div className="bg-green-600 text-[16px] text-white text-sm p-[6px] rounded-md mt-2">
            <span >{offer.title}</span>
            <span className="text-xs">{offer.subtitle}</span>
          </div>
        
        <div className="text-green-800 text-sm font-medium bg-green-200 mt-1 p-2 rounded">
          {off}
        </div>
      </div>
     
    </div>
     </a>
  );
}
