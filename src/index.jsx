import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; 

const App = () => {
  return (
    <div className="bg-yellow-400 text-black p-4 m-4 rounded font-bold">
      Tailwind is working!
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
