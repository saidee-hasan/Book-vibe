import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import { router } from './routes/Routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-[#1313130d]">
    <RouterProvider router={router}></RouterProvider></div>
    <ToastContainer />
  </React.StrictMode>,
)