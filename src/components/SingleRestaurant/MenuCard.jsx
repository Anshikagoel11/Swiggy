import { useState, useEffect } from "react";
import RestInfo from "./RestInfo";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function MenuCard({ menuItems, level=1, isFirst, veg, Bestseller}) {
  const [isExpand, setisExpand] = useState(isFirst);
  const isNested = level > 0;


//   Aapne MenuCard me isFirst prop diya tha jisse pehla section open dikhe, lekin jab restaurant change ho raha tha tab bhi pehle wale restaurant ka pehla card hi open reh ja raha tha aur next restaurent me first open nhi ho rha tha kyuki tabh tk menucard ka next load hum krte the toh vha isFirst(index===0) nhi h na ,  Iska reason ye hai:

// Problem: Purani isFirst State kyu reh rahi thi?
// const [isExpand, setisExpand] = useState(isFirst);
// React me useState ka initial value (isFirst) sirf pehli render pe consider hota hai.
// Baad me agar parent se isFirst prop change hota hai, toh isExpand automatically update nahi hota.

  useEffect(() => {
    if (Bestseller) {
      setisExpand(true);
    }
      setisExpand(isFirst); 
  }, [Bestseller,menuItems]);

 
  if ("categories" in menuItems) {
    return (
      <div className="w-[90%] max-w-lg mx-auto">
        <h1 className={`mt-4 text-start ${isNested ? "text-base font-semibold" : "text-lg font-semibold"}`}>
          <div className="flex justify-between items-center">
            {menuItems?.title}
            <button className="text-xl" onClick={() => setisExpand(!isExpand)}>
              {isExpand ? <MdExpandMore /> : <MdExpandLess />}
            </button>
          </div>
        </h1>

        <div>
          {isExpand &&
            menuItems?.categories.map((items) => (
              <MenuCard
                key={items?.title}
                menuItems={items}
                level={level + 1}
                veg={veg}
                Bestseller={Bestseller}
              />
            ))}
        </div>
      </div>
    );
  }

  let itemToShow = menuItems?.itemCards;

  if (Bestseller) {
    itemToShow = itemToShow?.filter((item) => item?.card?.info?.isBestseller);
  }
  if (veg === true) {
    itemToShow = itemToShow?.filter((item) => item?.card?.info?.isVeg);
  } else if (veg === false) {
    itemToShow = itemToShow?.filter((item) => !item?.card?.info.isVeg);
  }

  if (!itemToShow || itemToShow.length === 0) return null;

  return (
    <div className="w-[90%] max-w-lg mx-auto">
      <h1 className={`mt-4 text-start ${isNested ? "text-base font-semibold" : "text-lg font-semibold"}`}>
        <div className="flex justify-between items-center">
          {menuItems?.title}
          <button className="text-xl" onClick={() => setisExpand(!isExpand)}>
            {isExpand ? <MdExpandMore /> : <MdExpandLess />}
          </button>
        </div>
      </h1>

      <div>
        {isExpand &&
          itemToShow?.map((items) => (
            <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
          ))}
      </div>
      <div className="h-1 bg-gray-100 mt-1"></div>
    </div>
  );
}
