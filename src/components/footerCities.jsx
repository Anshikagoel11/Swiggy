import { useState } from "react";
import { cities } from "../utils/footercitiesdata";
import { v4 as uuidv4 } from "uuid";

function City({ city }) {
  return (
    <a href={city.link}>
      <div className=" border p-5 text-gray-800 border-gray-300 rounded-2xl  text-[14px] font-bold items-center justify-center text-center">
        <h3>{city.text}</h3>
      </div>
    </a>
  );
}



export default function FooterCities() {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 11); // 4 cols × 3 rows

  return (
    <div className="w-[70%] container m-auto mb-20">
        <h1 className="font-bold text-2xl mb-3">Cities with food delivery</h1>
      <div className="grid grid-cols-4 gap-3">
        {visibleCities.map((c) => (
          <City key={uuidv4()} city={c} />
        ))}
        {!showAll && (
          <button
            className="flex p-1 m-1 border rounded-2xl h-13 items-center justify-center text-orange-500 font-semibold"
            onClick={() => setShowAll(true)}
          >
            Show More &darr;
          </button>
        )}
      </div>
    </div>
  );
}
