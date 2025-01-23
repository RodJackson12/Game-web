import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Root from "./routes/root";
import ProductsPage from "./routes/products";
//import components

//import Routes

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
 {
   path: "/",
   element: <Root/>,
   children: [
     {
       path: "/",
       element: <p>landing</p>,
     },
     {
      path: "/about",
      element: <p>about</p>,
    },
    {
      path: "/cart",
      element: <p>cart</p>,
    },
    {
      path: "/products",
      element: <ProductsPage/>
    },
   ]
 },
]);


root.render(
 <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode>
);


