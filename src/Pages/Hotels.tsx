import React from "react";
import { HotelData } from "./HotelData";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Card = ({ prop }: any) => {
  return (
    <div className="flex flex-col items-center gap-[4px]  rounded-sm bg-white ">
      <div>
        <img src={prop.img} alt="" className="w-[200px] h-[150px] " />
      </div>
      <div>
        <div className=" gap-1 flex items-center justify-center">
          <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
          <span className="text-[12px] text-gray-500">{prop.review}</span>
        </div>
        <h3 className="text-[16px] font-mono font-bold">{prop.name}</h3>
        <span className="text-[14px] text-gray-500">{prop.description}</span>
        <div className="flex gap-[5px] items-end">
          <span className="text-red-500 font-sans font-bold text-[16px]">Rs {prop.newRent}</span>
          <span className="text-gray-500 text-[14px]">Rs {prop.oldRent} </span>
        </div>
      </div>
    </div>
  );
};

const Hotels = () => {
  return (
    <div className="flex flex-col items-center  gap-[80px] py-[20px]">
      <div className="flex  flex-col items-center">
        <h3 className="text-black text-[17px]">
          TOP HOTELS MAYBE YOU WILL LIKE
        </h3>
        <p className="text-gray-600 text-[13px]">
          Here's Some top rated Hotels for you!
        </p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {HotelData?.map((data) => (
          <Card prop={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
