import ResaurantHeader from "./ResaurantHeader"
import ResaurantItems from "./ResaurantItems"


export default function RestaurantData({id}){
    return(
        <>
        <ResaurantHeader id={id}/>
        <ResaurantItems/>
        </>
    )
}