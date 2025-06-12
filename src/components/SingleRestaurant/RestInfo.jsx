import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increaseItem, decreaseItem } from "../../Redux/cartslicer";

export default function RestInfo({ restData }) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const description = restData?.description || "";
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartSlicer.cartItems);
  const currentItem = cartItem?.find((item) => item.id === restData.id);
  const count = currentItem ? currentItem.quantity : 0;

  const toggleDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  return (
    <div className="w-full mx-auto py-4 border-b border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-6">
      {/* Text Section */}
      <div className="w-full sm:w-[60%]">
        {restData?.isBestseller && (
          <div className="text-red-500 text-xs font-semibold mb-1">★ Bestseller</div>
        )}
        <p className="font-semibold text-base sm:text-lg mb-1">{restData?.name}</p>
        <p className="mb-1 font-medium text-gray-700 text-sm">
          ₹{(restData?.price || restData?.defaultPrice) / 100}
        </p>

        <div className="flex items-center text-green-600 text-xs sm:text-sm font-semibold mb-1">
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
            <p className={`text-gray-500 text-xs sm:text-sm ${showFullDesc ? "" : "line-clamp-2"}`}>
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
      <div className="w-full sm:w-[30%] relative flex-shrink-0">
       <img
  className="w-full h-32 sm:h-40 object-cover rounded-lg"
  src={
    restData?.imageId
      ? `https://media-assets.swiggy.com/swiggy/image/upload/${restData.imageId}`
      : "https://via.placeholder.com/300x200?text=No+Image"
  }
  alt={restData?.name || "food"}
/>

        {(count === 0) ? (
          <button
            className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded px-5 py-1.5 text-green-600 font-bold text-sm"
            onClick={() => { dispatch(addItem(restData)) }}
          >
            ADD
          </button>
        ) : (
          <div className="absolute flex justify-between bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded px-2 py-1 text-green-600 font-bold text-sm">
            <button className="px-2" onClick={() => { dispatch(decreaseItem(restData)) }}>
              -
            </button>
            <span>{count}</span>
            <button className="px-3" onClick={() => { dispatch(increaseItem(restData)) }}>
              +
            </button>
          </div>
        )}

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
