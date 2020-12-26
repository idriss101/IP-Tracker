import React from "react";

export default function Header() {
  return (
    <div className="bg-hero-pattern bg-center p-3 text-white text-center mx-auto flex flex-col pb-40">
      <h1 className="text-2xl capitalize font-lightbold mb-6 ">
        IP address tracker
      </h1>
      <form action="">
        <input
          type="text"
          placeholder="this is the placeholder"
          className="py-1 px-3 rounded-lg"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
