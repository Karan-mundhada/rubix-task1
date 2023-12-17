import React, { useState } from "react";
import Insights from "./CustomerDetails/insights";
import Screen3 from "./CustomerDetails/screen3";
import Screen2 from "./CustomerDetails/screen2";
import Screen4 from "./CustomerDetails/screen4";
import Screen5 from "./CustomerDetails/screen5";

import { MdEvent } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { RxCrossCircled } from "react-icons/rx";
import { PiShareNetworkLight } from "react-icons/pi";
import { TbDots } from "react-icons/tb";
import { Edit } from "react-feather";

const CustomerDetails = ({ customer }) => {
  const [selectedScreen, setSelectedScreen] = useState("insights");

  return (
    <div className="flex px-4 py-2 bg-white rounded-sm top-10 left-1/2 flex-col w-full mt-2 ml-2">
      <div className="flex justify-between items-center mb-4 border-b-violet-500 pb-4 border-b-2">
        <div className="border-b-violet-500 border-r-2 pr-4">
          <h2 className="tex text-lg t-base font-semibold">{customer.name}</h2>
          <h6>ID: {customer.id}</h6>
        </div>

        <div className="flex flex-row">
          <button className="p-2 px-4 rounded-full bg-violet-600 text-white justify-between flex flex-row items-center">
            <MdEvent />
            <p className="ml-2">From</p>
          </button>
          <button className="mx-4 p-2 px-4 rounded-full bg-transparent border-2 border-violet-300 text-black justify-between flex flex-row items-center">
            <MdEvent />
            <p className="ml-2">To</p>
          </button>

          <div className="flex flex-row hover:cursor-pointer">
            <button className="bg-secondary p-2 px-4 mx-2 rounded-xl shadow-lg">
              <Edit size={20} />
            </button>
            <button className="bg-secondary p-2 px-4 mx-2 rounded-xl shadow-lg">
              <ImAttachment size={20} />
            </button>
            <button className="bg-secondary p-2 px-4 mx-2 rounded-xl shadow-lg">
              <RxCrossCircled size={20} />
            </button>
            <button className="bg-secondary p-2 px-4 mx-2 rounded-xl shadow-lg">
              <PiShareNetworkLight size={20} />
            </button>
            <button className="border-secondary border-2 p-2 px-3 mx-2 rounded-full shadow-lg">
              <TbDots size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-8 px-8 flex flex-row justify-between items-center hover:cursor-pointer border-b-2 pb-2 border-violet-300">
        <div onClick={() => setSelectedScreen("insights")}>Insights</div>
        <div onClick={() => setSelectedScreen("screen2")}>Tab 2</div>
        <div onClick={() => setSelectedScreen("screen3")}>Tab 3</div>
        <div onClick={() => setSelectedScreen("screen4")}>Tab 4</div>
        <div onClick={() => setSelectedScreen("screen5")}>Tab 5</div>
      </div>

      {selectedScreen == "insights" && <Insights />}
      {selectedScreen == "screen2" && <Screen2 />}
      {selectedScreen == "screen3" && <Screen3 />}
      {selectedScreen == "screen4" && <Screen4 />}
      {selectedScreen == "screen5" && <Screen5 />}
    </div>
  );
};

export default CustomerDetails;
