import React, { useState } from "react";
// import Button from "../components/button";
import Link from "../components/link";

const Homepage = () => {
  return (
    <>
        <div className="bg-purple-600 h-10">
          <div className=" max-w-4xl mx-auto text-3xl flex items-center align-middle justify-between">
            <h1 className="text-white font-bold">ToDo</h1>
            <div className="flex items-center justify-between gap-5 text-base">
              <div className="hover:bg-white hover:text-black text-white rounded-md px-4">
              <Link>Link 1</Link>
              </div>
              <div className="hover:bg-white hover:text-black text-white rounded-md px-4">
              <Link>Link 2</Link>
              </div>
              <div className="hover:bg-white hover:text-black text-white rounded-md px-4">
              <Link>Link 3</Link>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
    </>
  );
};

export default Homepage;
