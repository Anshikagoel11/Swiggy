import { useEffect, useState } from "react";

export default function FetchingData() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true";

      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        // Safely extract restaurant list
        const restaurantList =
          data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
         

        setRestaurants(restaurantList);
      } catch (error) {
        console.log("Failed to fetch:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Restaurants:</h1>
      {restaurants.map((rest) => {
          const url=`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${rest.imageId}`
        return(
           <div key={rest.id}>
         <img src={url} alt="" />
         </div>
        )
})}
   
    </div>
  );
}
