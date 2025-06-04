export default function GroceryCard({item}){
return(
   <a href={item?.action?.link}>
     <div className="p-1">
     <div className="h-40 w-37 m-2"> <img className="object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+item.imageId} alt="grocery-item" /></div>
      <h3 className="font-bold text-gray-800 text-center text-xl">{item?.action?.text}</h3>
    </div>
   </a>
)
}