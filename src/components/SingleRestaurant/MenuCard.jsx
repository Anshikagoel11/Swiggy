import { useState } from "react";
import RestInfo from "./RestInfo";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

export default function MenuCard({ menuItems, level = 0, isFirst = false }) {
  const [isExpand, setisExpand] = useState(isFirst);

  const isNested = level > 0;

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <h1
          className={`mt-7 text-start ${
            isNested ? "text-lg font-bold" : "text-xl font-bold"
          }`}
        >
          <div className="flex justify-between">
            {menuItems?.title}
            <button
              className="text-2xl"
              onClick={() => {
                setisExpand(!isExpand);
              }}
            >
              {" "}
              {isExpand ? <MdExpandMore /> : <MdExpandLess />}{" "}
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
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1
        className={`mt-7 text-start ${
          isNested ? "text-lg font-bold text-[17px]" : "text-xl font-bold"
        }`}
      >
        <div className="flex justify-between">
          {menuItems?.title}
          <button
            className="text-2xl"
            onClick={() => {
              setisExpand(!isExpand);
            }}
          >
            {" "}
            {isExpand ? <MdExpandMore /> : <MdExpandLess />}{" "}
          </button>
        </div>
      </h1>

      <div>
        {isExpand &&
          menuItems?.itemCards?.map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              restData={items?.card?.info}
            />
          ))}
      </div>
      <div className="h-2 bg-gray-100 mt-1"></div>
    </div>
  );
}
