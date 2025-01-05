import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";



const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
     
    </div>
  );
};

export default Root;