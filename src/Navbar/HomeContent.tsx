const HomeContent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[11rem] w-full">
      <div className="flex flex-col items-center gap-[10px]">
        <h3 className="text-[20px]">
          RENT UNIQUE PLACES TO STAY FROM LOCAL HOSTS IN 190-COUNTRIES
        </h3>
        <div className="flex items-center justify-around gap-[15px] bg-[white] rounded-sm">
          <div className="flex flex-col justify-center items-center gap-[5px] w-[400px]">
            <span className="text-red-600">Location</span>
            <span>
              <input type="datetime-local" value={`nepal`} />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <span className="text-red-600">Check in</span>
            <span>
              <input type="date" />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <span className="text-red-600">Check Out</span>
            <span>
              <input type="date" />
            </span>
          </div>
          <button className=" w-[200px] flex flex-col justify-center items-center gap-[5px] bg-red-600 px-[10px] py-[20px]">
              button
          </button>
        </div>
      </div>
      <div className="flex justify-evenly gap-[5px] w-[750px] bg-[white] border-collapse">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[16px]">12,460</span>
          <span className="text-[13px]">user access</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[16px]">10,750</span>
          <span className="text-[13px]">Rating & Review</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[16px]">8,670</span>
          <span className="text-[13px]">Hotels</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[16px]">9,630</span>
          <span className="text-[13px]">Transactions</span>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
