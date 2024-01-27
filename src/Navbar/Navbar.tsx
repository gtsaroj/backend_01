import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="flex gap-10 items-center bg-[#33589c]">
      <div>
        <img
          src="../../public/assets/hotel-removebg-preview.png"
          alt=""
          className="w-[100px]  "
        />
      </div>

      <button>
        <MenuIcon />
      </button>

      <nav>
        <ul className="flex gap-[10px]">
          <li className="list-none">Home</li>
          <li className="list-none">Services</li>
          <li className="list-none">About</li>
          <li className="list-none">Rent</li>
          <li className="list-none">Stays</li>
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
  );
};

export default Navbar;
