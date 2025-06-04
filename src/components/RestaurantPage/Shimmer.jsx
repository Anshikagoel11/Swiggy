export default function Shimmer() {
  return (
    <div className="w-[80%] container m-auto p-5">
      <div className="mt-5 mb-8">
        <div className="h-6 w-48 bg-gray-200 rounded  animate-pulse mb-5"></div>
        <div className="flex overflow-x-auto gap-3 pb-2">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="h-20 w-24 mt-10 mb-6 mr-5 rounded-full bg-gray-200  animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* "Top restaurant chains" section */}
      <div>
        <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mb-5 mt-5 flex"></div>
        
        {/* Restaurant cards - simpler version matching the image */}
        <div className="space-y-5 flex gap-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm w-300 mt-7 h-200">
              {/* Offer tag */}
              <div className="h-30 bg-gray-200 rounded animate-pulse mb-2"></div>
              
              {/* Restaurant name */}
              <div className="h-5 w-48 bg-gray-200 rounded animate-pulse mb-1"></div>
              
              {/* Rating and time */}
              <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}