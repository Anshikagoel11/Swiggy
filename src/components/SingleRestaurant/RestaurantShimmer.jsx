export default function RestaurantShimmer() {
    return (
        <div className="w-[60%] mt-15 container max-w-4xl mx-auto p-4 animate-pulse">
            {/* Breadcrumb Shimmer */}
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>

            {/* Restaurant Name Shimmer */}
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>

            {/* Main Info Box Shimmer */}
            <div className="border border-gray-200 rounded-2xl p-5 shadow-xl mb-6">
                <div className="flex items-center mb-4">
                    <div className="h-5 bg-gray-200 rounded w-16 mr-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-24 mr-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
                
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Deals Section Shimmer */}
            <div className="mb-8">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="flex overflow-x-auto gap-3 pb-2">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex-shrink-0 border border-gray-200 rounded-lg p-3 w-64 h-24 bg-gray-100">
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-gray-200 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Menu Section Shimmer */}
            <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
            
            {/* Search Bar Shimmer */}
            <div className="h-12 bg-gray-200 rounded-lg mb-6"></div>
        </div>
    );
}