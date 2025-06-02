

export default function Restaurantcard(restaurant){
return(
    <div>
        {
            <div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+restaurant?.info?.mediaFiles[0]?.url} alt="image" />
        </div>
        }
    </div>
)
}