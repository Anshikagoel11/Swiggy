import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; 
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./components/HomePage/Home"
import ScrollToTop from "./components/ScrollToTop";
import SingleRestaurant from "./components/SingleRestaurant/SingleRestaurant";
import SearchItem from "./components/SingleRestaurant/SearchItem";
import SecondHome from "./components/SingleRestaurant/secondHome";
import CartCheckout from "./components/cartCheckout";

const App = () => {
  return (
   
    <Provider store={store}>
   <BrowserRouter>
   {/* always use inside routers */}
    <ScrollToTop />  
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route element={<SecondHome/>}>
    <Route path="/restaurants" element={ <RestaurantPage/>}></Route>
    <Route path="/restaurants/:id" element={<SingleRestaurant/>}></Route>
    <Route path="/restaurants/:id/search" element={<SearchItem/>}></Route>
    </Route>
    <Route path="/checkout" element={<CartCheckout/>}></Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);
