import React from "react";

export default function Info() {
  return (
    <div className="bg-white w-5/6 rounded-xl py-1 px-2 mx-auto text-black">
      <ul>
        <li className="mb-4 pt-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            IP address
          </h3>
          <p className="font-medium text-xl">192.212.174.101</p>
        </li>
        <li className="mb-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            Location
          </h3>
          <p className="font-medium text-xl">Brooklyn, NY 10001</p>
        </li>
        <li className="mb-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            Timezone
          </h3>
          <p className="font-medium text-xl">UTC-05:00</p>
        </li>
        <li className="pb-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            ISP
          </h3>
          <p className="font-medium text-xl">SpaceX Starlink</p>
        </li>
      </ul>
    </div>
  );
}
