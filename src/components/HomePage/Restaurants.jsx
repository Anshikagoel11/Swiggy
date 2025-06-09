import { restaurantsdata } from "../../utils/restaurantsData";
import RestaurantCard from "./RestaurantCard";

export default function Restaurants() {
  return (
    <>
      <div className="max-w-[90%] container mx-auto mb-8 sm:mb-15">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 mt-16">
          Discover best restaurants on Dineout
        </div>
        <div className="flex overflow-x-auto space-x-2 sm:space-x-3 xs:space-x-1 scrollbar-hide">
          {restaurantsdata.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}
