import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchRestData } from "../../Redux/SingleRestSlicer";
import { IoSearch } from "react-icons/io5";
import MenuCard from "./MenuCard";

export default function SearchItem() {
  const { id } = useParams();
  const { data } = useSelector((state) => {
    return state.SingleRestaurant;
  });
  const [searchdata, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestData(id));
  }, [dispatch]);

  const ItemName = data?.data?.cards?.[0]?.card?.card?.text;
  const tempData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterData = tempData?.filter((item)=>{
   return  "title" in item?.card?.card;
})

  return (
    <div className="w-[60%] m-auto border-b-2 border-gray-200 mt-10">
      <div className="flex justify-between">
        <input
        className="w-[60%] border-none focus:outline-none"
          type="text"
          placeholder={`Search in ${ItemName}`}
          value={searchdata}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <IoSearch />
      </div>
       {searchdata.trim() !== "" && (
  <div className="w-full flex flex-col items-center m-auto py-8">
    <div className="w-[60%] max-w-3xl">
      {filterData?.map((menuItems) => (
        <MenuCard
          key={menuItems?.card?.card?.title}
          menuItems={menuItems?.card?.card}
          searchdata={searchdata}
        />
      ))}
    </div>
  </div>
)}

    </div>
  );
}
