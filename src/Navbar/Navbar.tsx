import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import HomeContent from "./HomeContent";
import { HotelData } from "../Pages/HotelData";
interface Products {
  id: number;
  img: string;
  review: string;
  name: string;
  description: string;
  newRent: number; // Using camelCase for consistency
  oldRent: number;
}

const SearchDiv = ({ data }: any) => {
  console.log(data);
  return (
    <div
      className="flex items-center justify-between gap-[7px] bg-[#9e9e9e] p-[4px]"
      key={data.id}
    >
      <img className="w-[50px] h-[50px]" src={data.img} alt="" />
      <h3>{data.name}</h3>
      <h4>{data.newRent}</h4>
    </div>
  );
};
const Navbar: React.FC = () => {
  const [query, setQuery] = useState<string>();
  const [queryData, setQueryData] = React.useState<Products[]>([]);
  const [haveValue, setHaveValue] = React.useState<boolean>(false);

  React.useEffect(() => {
    const filterData = HotelData.filter((object) =>
      object.name.toLocaleLowerCase().includes(query!)
    );
    if (query === "" || query === undefined) {
      setHaveValue(false);
    } else {
      setQueryData(filterData);
      setHaveValue(true);
    }
  }, [query]);

  console.log(query);

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
        <div className="flex items-center px-[10px] relative ">
          <input
            type="search"
            placeholder="Try Anything..."
            className="outline-none w-[300px] py-[5px] px-[8px] rounded-bl-md rounded-tl-md "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-[green] w-[50px] py-[4px] rounded-tr-md rounded-br-md">
            <SearchIcon />
          </button>
          <div
            className={`flex  flex-col gap-[4px] w-[350px] ${
              haveValue ? "visible" : "invisible"
            } bg-slate-300 rounded-sm absolute top-10 py-[5px] px-[10px] h-[200px] overflow-hidden overflow-y-scroll`}
          >
            {queryData?.map((data) => (
              <SearchDiv data={data} key={data.id} />
            ))}
          </div>
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
