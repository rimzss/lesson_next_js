import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  let [num, setNum] = useState(0);
  const add = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <div className="bg-slate-200 w-80 rounded-xl">
      <Link href="../">Home/</Link>
      <span>About</span>
      <div className="w-80 h-80 bg-blue-300 rounded-lg text-center">
        Counter: <span className="text-blue-500">{num}</span>
        <div className="m-5">
          <button
            onClick={add}
            className="bg-green-400 w-14 rounded-full hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={minus}
            className="w-14 bg-red-500 rounded-full hover:bg-red-700 ml-4"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
