# 🍽️ Swiggy Clone (React.js)

A frontend clone of the popular food delivery platform [Swiggy](https://www.swiggy.com), built with React.js. This project simulates key features of the Swiggy UI like restaurant listings, food items, filtering, searching, and cart management.

---

## 🚀 Features

- 🔍 Search for restaurants and dishes  
- 🏪 Browse restaurants by categories  
- 🍔 View menu items for each restaurant  
- 🛒 Add/remove items from cart  
- 📱 Responsive UI (mobile-friendly)  
- ⚡ Fast and smooth user experience with React  

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Redux  
- **Styling**: TailwindCSS  
- **Icons**: React Icons  
- **API**: Swiggy Public API via Proxy (`cors-anywhere`)  

---

## ⚠️ Important Note Before Using the Website

Swiggy's public APIs have **CORS (Cross-Origin Resource Sharing) restrictions**, which prevent direct browser access. To bypass this and use **real-time API data**, this project uses a **CORS proxy**.

> 🔗 **Before opening the website, visit this link:**  
> [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/)

Click the **"Request temporary access to the demo server"** button on that page. This will activate the proxy for your session, allowing the app to fetch real data from Swiggy.

Without this step, you may face loading issues or empty restaurant data due to API request blocks.

---

## 📦 Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Anshikagoel11/Swiggy.git

# Navigate into the project directory
cd Swiggy

# Install dependencies
npm install

# Start the development server
npm start
