
import {restaurantsdata} from "../utils/restaurantsData"
import Restaurantcard from "./restaurantCard"


export default function Restaurants(){
return(
    <div className="max-w-[80%] container m-auto">
        <h2>Discover best restaurants on Dineout</h2>
        {
            restaurantsdata.map((restaurant)=>{
                return <Restaurantcard keys={restaurant?.info?.id} restaurant={restaurant}/>
            })
        }
    </div>
)
}