import { restaurantsdata } from "../utils/restaurantsData";
import Restaurantcard from "./restaurantCard";

export default function Restaurants() {
  return (
    <>
      <div className="max-w-[80%] container m-auto">
        <div className="font-bold text-3xl mb-8">Discover best restaurants on Dineout</div>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {
            restaurantsdata.map((restaurant) => (
              <Restaurantcard key={restaurant?.info?.id*Math.random()} restaurant={restaurant} />
            ))
          }
        </div>
      </div>
    </>
  );
}
