import React from "react";
import { Buttons } from "../../../../components/button";
import { Link } from "react-router-dom";
function Hero3() {
  return (
    <div className="mx-10 my-10 bg-white py-4">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-2 lg:space-y-[-20px]">
          <div className="">
            <img
              className="rounded-full"
              src={`${process.env.PUBLIC_URL}/assets/lady-img.png`}
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src={`${process.env.PUBLIC_URL}/assets/guy1-img.png`}
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded-full"
              src={`${process.env.PUBLIC_URL}/assets/guy2-img.png`}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="font-semibold text-3xl my-2">
            Write, read and connect with great minds on chatter
          </h2>
          <p className="my-6">
            Share people your great ideas, and also read write-ups based on your
            interests. connect with people of same interests and goals{" "}
          </p>
          <Link to="/signup">
            <Buttons
              content="Get started"
              styles="bg-blue text-white rounded px-4 py-1 text-sm font-semibold"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
