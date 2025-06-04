export default function FoodCart({food}){
 return(
<a href={food?.action.link} >
<img className="w-33 h-45 object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+food?.imageId} alt="fooditems" />
</a>
 )   
}