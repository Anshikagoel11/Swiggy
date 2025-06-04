
import { useState } from "react";
import { GroceryCities } from "../../utils/footerGrocerydata";
import { v4 as uuidv4 } from "uuid";


function City({ cities }) {
  return (
    <a href={cities.link}>
      <div className=" border p-5 text-gray-800 border-gray-300 rounded-2xl  text-[14px] font-bold items-center justify-center text-center">
        <h3>{cities.text}</h3>
      </div>
    </a>
  );
}

export default  function FooterGrocery(){

    const [showAll , setShowAll]=useState(false);
    const visibleGroceryCities = showAll? GroceryCities : GroceryCities.slice(0,11);

return(
    <div className="w-[70%] container m-auto mb-20 ">
         <h1 className="font-bold mb-2 text-2xl">Cities with grocery delivery</h1>
<div className="grid grid-cols-4 gap-3">
{
    visibleGroceryCities.map((c)=>{
        return <City key={uuidv4()} cities={c}/>
    })

}
 {!showAll && (
          <button
            className="flex p-1 m-1 border rounded-2xl h-13 items-center justify-center text-orange-500 font-semibold"
            onClick={() => setShowAll(true)}
          >
            Show More &darr;
          </button>
        )}
</div>
    </div>
)
}