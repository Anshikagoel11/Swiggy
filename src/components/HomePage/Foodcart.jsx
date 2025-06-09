export default function FoodCart({ food }) {
  return (
    <a href={food?.action?.link}>
      <img
        className="w-24 h-36 xs:w-20 xs:h-32 sm:w-28 sm:h-40 object-contain"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${food?.imageId}`}
        alt="fooditems"
      />
    </a>
  );
}
