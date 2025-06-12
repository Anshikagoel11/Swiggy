import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchRestData } from "../../Redux/SingleRestSlicer";
import { IoSearch } from "react-icons/io5";
import RestInfo from "./RestInfo";

export default function SearchItem() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.SingleRestaurant);
  const [searchdata, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestData(id));
  }, [dispatch, id]);

  const ItemArray = [];
  const ItemName = data?.data?.cards?.[0]?.card?.card?.text;
  const tempData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterData = tempData?.filter((item) => "title" in item?.card?.card);

  if (filterData && filterData.length > 0) {
    filterData.forEach((obj) => {
      const item = obj?.card?.card?.itemCards;
      const categoryItems = obj?.card?.card?.categories?.itemCards;
      if (item) {
        item.forEach((card) => ItemArray.push(card?.card?.info));
      } else if (categoryItems) {
        categoryItems.forEach((card) => ItemArray.push(card?.card?.info));
      }
    });
  }

  const uniqueItems = [];
  const map = new Map();
  for (const item of ItemArray) {
    if (!map.has(item.id)) {
      uniqueItems.push(item);
      map.set(item.id, true);
    }
  }

  return (
    <div className="w-[90%] m-auto border-b-2 border-gray-200 mt-10">
      <div className="flex justify-between items-center mb-4">
        <input
          className="w-[70%]  border-gray-300 focus:outline-none text-sm px-2 py-1"
          type="text"
          placeholder={`Search in ${ItemName}`}
          value={searchdata}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <IoSearch className="text-gray-600 text-xl ml-2" />
      </div>
      {searchdata.trim() !== "" && (
        <div className="w-full flex flex-col items-center m-auto py-6">
          <div className="w-full max-w-4xl">
            {uniqueItems
              .filter((item) =>
                item?.name?.toLowerCase().includes(searchdata.toLowerCase())
              )
              .map((item) => (
                <RestInfo key={item?.id} restData={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
