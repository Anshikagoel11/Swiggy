import { restaurantsdata } from "../../utils/restaurantsData";
import Restaurantcard from "./restaurantCard";

export default function Restaurants() {
  return (
    <>
      <div className="max-w-[80%] container m-auto mb-15">
        <div className="font-bold text-3xl mb-8 mt-16">Discover best restaurants on Dineout</div>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {
            restaurantsdata.map((restaurant) => {
              return <Restaurantcard key={restaurant?.info?.id} restaurant = {restaurant} />
})
          }
        </div>
      </div>
    </>
  );
}
