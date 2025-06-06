import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";

export default function ResaurantItems() {
  const { data } = useSelector((state) => state.SingleRestaurant);

  const tempData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filterData = tempData?.filter(
    (item) => "title" in item?.card?.card
  );

  return (
    <div className="w-full flex flex-col items-center m-auto  py-8">
      <div className="w-[60%] max-w-3xl">
        <hr className="mb-5 text-gray-300" />
        {filterData?.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
          />
        ))}
      </div>
    </div>
  );
}
