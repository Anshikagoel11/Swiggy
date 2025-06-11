// FoodItems.jsx
import fooddata from '../../utils/fooddata';
import FoodCart from './Foodcart';

export default function FoodItems() {
  return (
   <div className="w-[90%] sm:w-[80%] mx-auto mt-8 sm:mt-20 mb-10 sm:mb-15 overflow-x-auto scrollbar-hide">
  <div className="grid grid-flow-col grid-rows-2 gap-1 sm:gap-4 w-max">
    {fooddata.map((food) => (
      <FoodCart key={food.id} food={food} />
    ))}
  </div>
</div>

  );
}