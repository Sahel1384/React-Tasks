import { Outlet } from "react-router-dom";
import Navbar from "./Structure/Navbar/Navbar";

function Structure() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Structure;
