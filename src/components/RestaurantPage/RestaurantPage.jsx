import RestaurantItems from "./RestaurantItems"
import { useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import {fetchData} from "../../Redux/restaurantSlice"
import TopRestaurant from "./TopRestaurant";
import OnlineFoodRestaurant from "./OnlineFoodRestaurant";
import Shimmer from "./Shimmer"


export default function RestaurantPage() {
  const { data, loading, error } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data?.data?.cards || data?.data?.cards.length === 0) {
      dispatch(fetchData());

    }
  }, [dispatch, data]);

  if (loading) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  const dataItem1 = data?.data?.cards?.[0]?.card?.card;
  const dataItem2 = data?.data?.cards?.[1]?.card?.card;
  const dataItem3 = data?.data?.cards?.[2]?.card?.card;



  return (
    <div className="w-[92%] sm:w-[97%] md:w-[90%] px-4 mx-auto">
      <RestaurantItems data={dataItem1} />
      <TopRestaurant data={dataItem2} />
      <OnlineFoodRestaurant data1={dataItem3} data2={dataItem2} />
    </div>
  );
}
