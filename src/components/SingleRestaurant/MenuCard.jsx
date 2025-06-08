import { useState, useEffect } from "react";
import RestInfo from "./RestInfo";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function MenuCard({ menuItems, level = 0, isFirst = false, veg = null, Bestseller = false }) {
  const [isExpand, setisExpand] = useState(isFirst);
  const isNested = level > 0;

  useEffect(() => {
    if (Bestseller) {
      setisExpand(true);
    }
  }, [Bestseller]);

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <h1 className={`mt-7 text-start ${isNested ? "text-lg font-bold text-[17px]" : "text-xl font-bold"}`}>
          <div className="flex justify-between">
            {menuItems?.title}
            <button className="text-2xl" onClick={() => setisExpand(!isExpand)}>
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
    <div className="w-full">
      <h1 className={`mt-7 text-start ${isNested ? "text-lg font-bold text-[17px]" : "text-xl font-bold"}`}>
        <div className="flex justify-between">
          {menuItems?.title}
          <button className="text-2xl" onClick={() => setisExpand(!isExpand)}>
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
      <div className="h-2 bg-gray-100 mt-1"></div>
    </div>
  );
}
