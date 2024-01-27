import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import RadioIcon from '@mui/icons-material/Radio';
const Middle = () => {5
  return (
      <div className="flex flex-col items-center gap-[25px] py-[50px] px-[20px] bg-[#adacac]">
      <div className="flex flex-col items-center gap-[8px]">
        <h2 className="text-[20px] font-sans ">SEE HOW IT WORKS</h2>
        <p className="text-[13px] text-gray-700">Discover how schedule can you find everything you want</p>
      </div>
      <div className="flex gap-[10px] items-center flex-wrap">
        <div className="flex flex-col items-center justify-center gap-[10px] w-[350px] bg-white rounded-sm py-[15px] px-[20px]">
          <div className="w-100px">
          <CalendarMonthIcon className="w-[100px]"/>
          </div>
          <div className="flex flex-col items-center gap-[5px]">
            <h3 className="text-[15px] font-sans font-bold flex flex-col items-center">SELECT DAYS <span> CHECK IN & CHECK OUT </span></h3>
            <p className="text-gray-500 text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
               blanditiis, aut distinctio unde similique nihil.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[10px] w-[350px] bg-white rounded-sm py-[15px] px-[20px]">
          <div>
          <QueryStatsIcon/>
          </div>
          <div className="flex flex-col items-center gap-[5px]">
            <h3 className="text-[15px] font-sans font-bold flex flex-col items-center">
              FIND ALL <span> HOTELS NEAR YOU </span>
            </h3>
            <p  className="text-gray-500 text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur laboriosam accusantium odio, labore consequuntur ea!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-[10px] w-[350px] bg-white rounded-sm py-[15px] px-[20px]">
            <div>
             <RadioIcon/>
            </div>
            <div className="flex flex-col items-center gap-[5px]">
              <h3 className="text-[15px] font-sans font-bold flex flex-col items-center">
                PICK A HOTEL <span> AND ENJOY YOUR TRIP</span>
              </h3>
              <p  className="text-gray-500 text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur laboriosam accusantium odio, labore consequuntur ea!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
