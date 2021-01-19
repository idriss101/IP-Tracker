import React, { useState, useContext } from "react";
import Info from "./Info";
import axios from "axios";

export default function Header(props) {
  const [input, setInput] = useState("");
  const getLocation = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_kbPdCKzyvjussFGcZZJFz4vZj2FHI&ipAddress=${input}`
    );
    const { data } = res;
    setInput("");
    props.setLocationData({ ...data });
    console.log(data);
  };

  return (
    <div className="bg-hero-pattern bg-center p-3 text-white text-center mx-auto flex flex-col justify-center align-center pb-20 relative overflow-visible z-0 w-full bg-no-repeat bg-cover lg:pb-14">
      <div className="pb-7">
        <h1 className="text-3xl capitalize font-lightbold mb-6 mt-3 lg:text-4xl">
          IP address tracker
        </h1>
        <form
          action=""
          className="flex flex-row justify-center"
          onSubmit={getLocation}
        >
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="rounded-tl-xl rounded-bl-xl w-5/6 py-4 text-md text-black px-3 focus:outline-none lg:w-2/6"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="w-12 bg-black rounded-tr-xl rounded-br-xl focus:outline-none hover:bg-gray-500 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
      <Info {...props} />
    </div>
  );
}
