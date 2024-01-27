import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import HomeContent from "./HomeContent";

const Navbar = () => {
  return (
    <div className=" flex  flex-col items-start bg-navbar-img bg-cover h-[70vh] pt-[-20px] gap-[60px] ">
      <div className="flex gap-10 items-center  w-full">
        <div className=" flex items-start justify-start">
          <img
            src="../../public/assets/hotel-removebg-preview.png"
            alt=""
            className="w-[100px] h-[px] "
          />
        </div>

        <button>
          <MenuIcon />
        </button>

        <nav>
          <ul className="flex gap-[40px]">
            <li className="list-none text-[17px] font-sans">Home</li>
            <li className="list-none text-[17px] font-sans">Services</li>
            <li className="list-none text-[17px] font-sans">About</li>
            <li className="list-none text-[17px] font-sans">Rent</li>
            <li className="list-none text-[17px] font-sans">Stays</li>
          </ul>
        </nav>
        <div className="flex items-center px-[10px]">
          <input
            type="search"
            placeholder="Try Anything..."
            className="outline-none w-[300px] py-[5px] px-[8px] rounded-bl-md rounded-tl-md "
          />
          <button className="bg-[green] w-[50px] py-[4px] rounded-tr-md rounded-br-md">
            <SearchIcon />
          </button>
        </div>
        <div className="flex gap-[10px] items-center">
          <button className=" bg-slate-50 py-[5px] px-[7px] rounded-md w-[100px]">
            login
          </button>
          <button className=" bg-slate-50 py-[5px] px-[7px] rounded-md w-[100px]">
            Sign in
          </button>
        </div>
      </div>

      <HomeContent />
    </div>
  );
};

export default Navbar;
