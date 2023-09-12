import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Countries from './Countries';
import App from './App';
import Abc from './country';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App> ,
     children:[{
        path: "/maruthi",
        element:<Countries></Countries>,
        children:[
          {
            path:"/maruthi/naga/:cname",
            element:<Abc></Abc>
          }
        ]
      }],

    },
   
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
