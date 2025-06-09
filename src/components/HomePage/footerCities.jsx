import { useState, useEffect } from "react";
import { cities } from "../../utils/footercitiesdata";
import { v4 as uuidv4 } from "uuid";

function City({ city }) {
  return (
    <a href={city.link}>
      <div className="border p-3 sm:p-4 text-gray-800 border-gray-300 rounded-2xl text-[12px] sm:text-[14px] font-bold text-center">
        <h3>{city.text}</h3>
      </div>
    </a>
  );
}

export default function FooterCities() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleCities = showAll
    ? cities
    : isMobile
    ? cities.slice(0, 6)
    : cities.slice(0, 11);

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] container mx-auto mb-10">
      <h1 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
        Cities with food delivery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {visibleCities.map((c) => (
          <City key={uuidv4()} city={c} />
        ))}

        {!showAll && (
          <button
            className="flex p-1 sm:p-2 mt-1 sm:mt-2 border rounded-2xl h-10 sm:h-12 items-center justify-center text-orange-500 font-semibold col-span-2 sm:col-span-2 lg:col-span-4 text-sm sm:text-base"
            onClick={() => setShowAll(true)}
          >
            Show More &darr;
          </button>
        )}
      </div>
    </div>
  );
}
