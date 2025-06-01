import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; 
import Headers from "./components/headers";


const App = () => {
  return (
   <Headers/>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);
