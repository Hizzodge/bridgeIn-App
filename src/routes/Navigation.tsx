import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <>
      <div className="navigation-container flex justify-between">
        <Link className="Logo-link font-montserrat cursor-pointer p-5" to={"/"}>
          <span className="text-red-700 text-center font-bold text-xl">
            BRIDGE IN
          </span>
        </Link>
        <div className="flex">
          <Link
            className="text-black-500 font-montserrat cursor-pointer p-5"
            to={"/"}
          >
            Posts
          </Link>
          <Link
            className="text-black-500 font-montserrat cursor-pointer p-5"
            to={"/about"}
          >
            About
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
