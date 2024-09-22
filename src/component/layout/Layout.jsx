import { Outlet } from "react-router-dom";
import NavbarComponent from "../navbar/Navbar";

const Layout = () => {
  return (
    <>
    <NavbarComponent/>
      <Outlet />
    </>
  );
};

export default Layout;
