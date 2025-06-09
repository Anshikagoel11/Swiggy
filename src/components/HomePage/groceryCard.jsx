import React from 'react';

export default function GroceryCard({ item }) {
  return (
    <a href={item?.action?.link}>
      <div className="p-1">
        <div className="w-28 h-32 sm:w-32 sm:h-36 xs:w-24 xs:h-28 m-2">
          <img
            className="w-full h-full object-contain"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
            alt="grocery-item"
          />
        </div>
        <h3 className="font-bold text-gray-800 text-center text-xs sm:text-sm md:text-base lg:text-lg">
          {item?.action?.text}
        </h3>
      </div>
    </a>
  );
}
