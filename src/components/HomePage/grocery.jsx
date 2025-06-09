import GroceryCard from "./GroceryCard";
import { grocriesdata } from "../../utils/groceriesdata";

export default function GrocriesItem() {
  return (
    <>
      <div className="max-w-[90%] mx-auto">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-8">
          Shop groceries on Instamart
        </div>
        <div className="flex overflow-x-auto space-x-2 sm:space-x-3 xs:space-x-1 scrollbar-hide">
          {grocriesdata.map((item) => (
            <GroceryCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
