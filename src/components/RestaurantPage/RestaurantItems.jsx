export default function RestaurantItems({ data }) {
  const items = data?.imageGridCards?.info;

  return (
    <div>
      <h1 className="font-bold text-[16px] sm:text-[24px] mb-4 sm:mb-5 mt-8 sm:mt-10">
        {data?.header?.title}
      </h1>

      <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-3 mb-4 sm:mb-5">
        {items?.map((item) => (
          <div
            key={item?.id}
            className="min-w-[6.5rem] sm:min-w-[8rem] h-24 sm:h-32 bg-gray-200 rounded overflow-hidden"
          >
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
