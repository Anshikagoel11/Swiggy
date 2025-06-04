import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; 
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./components/HomePage/Home"

const App = () => {
  return (
    <Provider store={store}>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/restaurants" element={ <RestaurantPage/>}></Route>
   </Routes>
   </BrowserRouter>
   </Provider>
 
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);
