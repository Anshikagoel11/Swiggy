
import GroceryCard from "./groceryCard"
import {grocriesdata} from "../../utils/groceriesdata"

export default function GrocriesItem(){
   return(
    <>
    <div className="max-w-[80%] container m-auto">
    <div className="font-bold text-3xl mb-8">Shop groceries on Instamart</div>
    <div className="flex  overflow-x-auto space-x-4 scrollbar-hide">
      {
         grocriesdata.map((item)=>{
         return <GroceryCard key={item?.id} item={item}/>
       })
      }
    </div>
    </div>
    </>
   )
}