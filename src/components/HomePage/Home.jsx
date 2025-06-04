import Headers from "./headers";
import FoodItems from "./fooditems"
import GrocriesItem from "./grocery";
import Restaurants from "./Restaurants";
import Footer from "./footer";


export default function Header(){
    return(
    <>
     <Headers/>
   <FoodItems/>
   <GrocriesItem/>
   <Restaurants/>
   <Footer/>
    </>
    )
}