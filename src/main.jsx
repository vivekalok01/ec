import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import ShopuStore from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Bag from "./components/bag/Bag.jsx";
import Home from "./components/Home.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import WishList from "./components/WishList.jsx";
import WishlistBox from "./components/WishlistBox.jsx";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details',
        element: <ProductDetails></ProductDetails>
      },
      {
        path:'/wishlist',
        element: <WishlistBox></WishlistBox>
      }
      
    ]
  },
  {
    path: "/bag",
    element: <Bag></Bag>,
  },
 


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={ShopuStore}>
      <RouterProvider router={rounter}></RouterProvider>
    </Provider>
  </StrictMode>
);
