import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <div>
          <div className="h-40 flex items-center ">
        <Navbar />
      </div>
      <Outlet></Outlet>
      
    </div>
  )
}
