import { FcRating } from "react-icons/fc";

export default function RestaurantCard({ restaurant }) {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restaurant?.info?.mediaFiles[0]?.url}`;
  const cuisines = restaurant.info.cuisines.join(" • ");
  const address = restaurant.info.locationInfo.formattedAddress;
  const distance = restaurant.info.locationInfo.distanceString;
  const cost = restaurant.info.costForTwo;
  const offer = restaurant.info.offerInfoV3?.vendorOffer;
  const off = restaurant.info.customerOffer.info.description;
  const link = restaurant.cta.link;

  return (
    <a href={link}>
      <div className="font-bold w-72 sm:w-64 xs:w-56 min-w-[200px] max-w-xs bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 mt-1 sm:mt-2">
        <div className="relative h-36 sm:h-32 xs:h-28">
          <img
            src={imageUrl}
            alt="restaurant"
            className="h-full w-full object-cover rounded-t-2xl"
          />
          <div className="flex justify-between text-white absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full px-2 py-1 sm:px-3 sm:py-2">
            <h2 className="text-base sm:text-sm xs:text-xs truncate">
              {restaurant.info.name}
            </h2>
            <div>
              <span className="flex items-center gap-1 text-sm sm:text-xs xs:text-[10px]">
                <FcRating />
                {restaurant.info.rating.value}
              </span>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-2 xs:p-1 text-gray-700 text-[11px] sm:text-[10px] xs:text-[9px] space-y-1">
          <div className="flex justify-between">
            <h3 className="truncate">{cuisines}</h3>
            <span>{cost}</span>
          </div>

          <div className="text-gray-500 flex justify-between text-[10px] sm:text-[9px] xs:text-[8px]">
            <div className="truncate max-w-[60%]">{address}</div>
            <span>{distance}</span>
          </div>

          <div className="flex gap-1 mt-1 flex-wrap text-[9px] sm:text-[8px] xs:text-[7px]">
            <span className="bg-gray-200 px-1 py-[2px] rounded-full">
              Table booking
            </span>
            <span className="bg-gray-200 px-1 py-[2px] rounded-full">
              Buffet
            </span>
          </div>

          <div className="bg-green-600 text-white text-[12px] p-1 rounded-md mt-1">
            <span className="block">{offer.title}</span>
            <span className="text-xs">{offer.subtitle}</span>
          </div>

          <div className="text-green-800 text-xs font-medium bg-green-200 mt-1 p-1 rounded truncate">
            {off}
          </div>
        </div>
      </div>
    </a>
  );
}
