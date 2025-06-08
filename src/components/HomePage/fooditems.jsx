import fooddata from "../../utils/fooddata";
import FoodCart from "./Foodcart";

export default function FoodItems() {
  return (
  <div className="w-[80%] mx-auto mt-20 mb-15 overflow-x-auto scrollbar-hide">
  <div className="grid grid-flow-col grid-rows-2 gap-4 w-max">
    {fooddata.map((food) => (
      <FoodCart key={food.id} food={food} />
    ))}
  </div>
</div>
  );
}
