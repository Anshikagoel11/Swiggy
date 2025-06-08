import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem,increaseItem,decreaseItem } from "../../Redux/cartslicer";

export default function RestInfo({ restData }) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const description = restData?.description || "";
  const dispatch = useDispatch();

  const cartItem = useSelector((state)=>state.cartSlicer.cartItems)
  // console.log(cartItem)
   const currentItem = cartItem?.find(item => item.id === restData.id)
   const count = currentItem?currentItem.quantity:0;
  //  console.log(count)

  const toggleDesc = () => {
    setShowFullDesc(!showFullDesc);
  };


  return (
    <div className="w-full mx-auto py-6 border-b border-gray-300 flex justify-between items-start">
      {/* Text Section */}
      <div className="w-[60%]">
        {restData?.isBestseller && (
          <div className="text-red-500 text-sm font-semibold mb-1">★ Bestseller</div>
        )}
        <p className="font-semibold text-lg mb-1">{restData?.name}</p>
        <p className="mb-1 font-medium text-gray-700">
          ₹{(restData?.price || restData?.defaultPrice) / 100}
        </p>

        <div className="flex items-center text-green-600 text-sm font-semibold mb-1">
          {restData?.ratings?.aggregatedRating?.rating && (
            <span>★ {restData?.ratings?.aggregatedRating?.rating}</span>
          )}
          {restData?.ratings?.aggregatedRating?.ratingCountV2 && (
            <span className="text-gray-600 ml-1 font-normal">
              ({restData?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
          )}
        </div>

        {description && (
          <>
            <p className={`text-gray-500 text-sm ${showFullDesc ? "" : "line-clamp-2"}`}>
              {description}
            </p>
            {description.length > 100 && ( 
              <button
                className="text-blue-500 text-xs mt-1"
                onClick={toggleDesc}
              >
                {showFullDesc ? "Show less" : "Show more"}
              </button>
            )}
          </>
        )}
      </div>

      {/* Image + Button Section */}
      <div className="w-[30%] relative">
        <img
          className="w-full h-40 object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${restData?.imageId}`}
          alt="food"
        />
        {
          (count===0)?
        (  <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded px-7 py-2 text-green-600 font-bold" onClick={()=>{dispatch(addItem(restData))}}>
          ADD
        </button>):(
          <div className="absolute flex space-between  bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded px-1 py-2 text-green-600 font-bold">
            <button className="px-3" onClick={()=>{dispatch(decreaseItem(restData))}}>
          -
        </button>
        <span>{count}</span>
        <button className="px-4" onClick={()=>{dispatch(increaseItem(restData))}}> 
          +
        </button>
          </div>
        )
        }

        {restData?.itemAttribute?.vegClassifier === "NONVEG" && (
          <div className="bg-white absolute top-1 right-1 p-1 rounded">
            <p className="text-xs text-red-600 font-bold">Non-Veg</p>
          </div>
        )}
        {restData?.itemAttribute?.vegClassifier === "VEG" && (
          <div className="bg-white absolute top-1 right-1 p-1 rounded">
            <p className="text-xs text-green-600 font-bold">Veg</p>
          </div>
        )}
      </div>
    </div>
  );
}
