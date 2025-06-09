import { useState } from "react";
import { GroceryCities } from "../../utils/footerGrocerydata";
import { v4 as uuidv4 } from "uuid";

function City({ cities }) {
  return (
    <a href={cities.link}>
      <div className="border p-3 sm:p-4 text-gray-800 border-gray-300 rounded-2xl text-[12px] sm:text-[14px] font-bold text-center">
        <h3>{cities.text}</h3>
      </div>
    </a>
  );
}

export default function FooterGrocery() {
  const [showAll, setShowAll] = useState(false);
  const visibleGroceryCities = showAll ? GroceryCities : GroceryCities.slice(0, 6); // Mobile pe 6 cities

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] container mx-auto mb-10"> {/* Margin bottom kam */}
      <h1 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
        Cities with grocery delivery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"> {/* Gap mobile pe kam */}
        {visibleGroceryCities.map((c) => (
          <City key={uuidv4()} cities={c} />
        ))}

        {!showAll && (
          <button
            className="flex p-2 mt-2 border rounded-2xl h-10 sm:h-12 items-center justify-center text-orange-500 text-sm sm:text-base font-semibold"
            onClick={() => setShowAll(true)}
          >
            Show More &darr;
          </button>
        )}
      </div>
    </div>
  );
}
