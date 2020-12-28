import React from "react";

export default function Info(props) {
  return (
    <div
      className="bg-white w-5/6 rounded-xl py-1 px-2 mx-auto text-black absolute top-40 left-8 right-8 shadow-xl"
      style={{ zIndex: "20" }}
    >
      <ul>
        <li className="mb-4 pt-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            IP address
          </h3>
          <p className="font-medium text-xl">{props.ip}</p>
        </li>
        <li className="mb-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            Location
          </h3>
          <p className="font-medium text-xl">{`${props.location.city}, ${props.location.country}`}</p>
        </li>
        <li className="mb-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            Timezone
          </h3>
          <p className="font-medium text-xl">UTC{props.location.timezone}</p>
        </li>
        <li className="pb-4">
          <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">
            ISP
          </h3>
          <p className="font-medium text-xl">{props.isp}</p>
        </li>
      </ul>
    </div>
  );
}
