import { useState ,useEffect} from "react";
import RestInfo from "./RestInfo";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

export default function MenuCard({ menuItems, level = 0, isFirst=false  ,veg=null,Bestseller=false,searchdata}) {
  const [isExpand, setisExpand] = useState(isFirst);

  const isNested = level > 0;

    useEffect(() => {
       const matchFound = menuItems?.itemCards?.some(item =>
    item?.card?.info?.name?.toLowerCase()?.includes(searchdata?.toLowerCase())
  );
    if (Bestseller || (searchdata && matchFound)) {
      setisExpand(true);
    }
  }, [Bestseller,searchdata]);



  if ("categories" in menuItems) {
    return (
      <div className="w-full">
       {!searchdata?.trim()  && (
  <h1 className={`mt-7 text-start ${isNested ? "text-lg font-bold text-[17px]" : "text-xl font-bold"}`}>
    <div className="flex justify-between">
      {menuItems?.title}
      <button
        className="text-2xl"
        onClick={() => setisExpand(!isExpand)}
      >
        {isExpand ? <MdExpandMore /> : <MdExpandLess />}
      </button>
    </div>
  </h1>
)}

        <div>
          {isExpand &&
            menuItems?.categories.map((items) => (
              <MenuCard
                key={items?.title}
                menuItems={items}
                level={level + 1} veg={veg} Bestseller={Bestseller}
              />
            ))}
        </div>
      </div>
    );
  }

  let itemToShow = menuItems?.itemCards;

  if(Bestseller){
    itemToShow = itemToShow?.filter((item)=>item?.card?.info?.isBestseller)
  }
  if(veg===true){
   itemToShow = itemToShow?.filter((item)=>item?.card?.info?.isVeg);
  }else if(veg===false){
   itemToShow = itemToShow?.filter((item)=>!item?.card?.info.isVeg);
  }
  else if (searchdata && searchdata.trim() !== '') {
  itemToShow = itemToShow?.filter(item =>
    item?.card?.info?.name?.toLowerCase()?.includes(searchdata.toLowerCase())
  );
  if (!itemToShow || itemToShow.length === 0) return null;

}


  return (
    <div className="w-full">
     {!searchdata?.trim()  && (
  <h1 className={`mt-7 text-start ${isNested ? "text-lg font-bold text-[17px]" : "text-xl font-bold"}`}>
    <div className="flex justify-between">
      {menuItems?.title}
      <button
        className="text-2xl"
        onClick={() => setisExpand(!isExpand)}
      >
        {isExpand ? <MdExpandMore /> : <MdExpandLess />}
      </button>
    </div>
  </h1>
)}


      <div>
       

        {isExpand &&
          itemToShow?.map((items) => (
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
