import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; 
import Headers from "./components/headers";
import FoodItems from "./components/fooditems"
import GrocriesItem from "./components/grocery";
import Restaurants from "./components/Restaurants";
import Footer from "./components/footer";
import RestaurantPage from "./components/RestaurantPage";

const App = () => {
  return (
   <>
   <Headers/>
   <FoodItems/>
   <GrocriesItem/>
   <Restaurants/>
   <Footer/>
   <RestaurantPage/>
   </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);
