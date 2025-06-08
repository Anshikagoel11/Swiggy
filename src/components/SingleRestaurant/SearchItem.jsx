import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchRestData } from "../../Redux/SingleRestSlicer";
import { IoSearch } from "react-icons/io5";
import RestInfo from "./RestInfo";
export default function SearchItem() {
  const { id } = useParams();
  const { data } = useSelector((state) => {
    return state.SingleRestaurant;
  });
  const [searchdata, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestData(id));
  }, [dispatch,id]);

  const ItemArray=[];
  const ItemName = data?.data?.cards?.[0]?.card?.card?.text;
  const tempData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterData = tempData?.filter((item)=>{
   return  "title" in item?.card?.card;
});
 

if(filterData && filterData.length >0){
  //sare big obj jisme title tha unko le leya aur catogery walo m bhe title tha toh vo bhe aa gye ise me
filterData.forEach((obj)=>{
 const  item = obj?.card?.card?.itemCards; //selected itemcart array 
 const categoryItems  = obj?.card?.card?.categories?.itemCards; //same in catogery 
 if(item){
 item.forEach((card)=>{  //now push every obj of dish into array
  ItemArray.push(card?.card?.info)
 })
} else if(categoryItems ){
  categoryItems.forEach((card)=>{
    ItemArray.push(card?.card?.info)
  })
}
})
}
//array will dish data indiviually
// console.log(ItemArray)
//filter array with only unique dishes
const uniqueItems = [];
const map=new Map();
for(const item of ItemArray){
  if(!map.has(item.id)){
    uniqueItems.push(item);
    map.set(item.id,true);
  }
}
// console.log(uniqueItems)

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
      {uniqueItems
        .filter((item) =>
          item?.name?.toLowerCase()?.includes(searchdata.toLowerCase())
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
