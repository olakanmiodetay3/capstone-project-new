import React from "react";
import { Buttons } from "../../../../components/button";
import { Link } from "react-router-dom";
function Hero2() {
  return (
    <div className="bg-pink py-8 px-4">
      <div className="mx-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:mx-auto max-auto-xl ">
          <div className="col-span-1">
            <div className="">
              <img
                className="rounded-full"
                src={`${process.env.PUBLIC_URL}/assets/man-img.png`}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="">
              <p className="mb-6">
                "Chatter has become an integral part of my online experience. As
                a user of this incredible blogging platform, I have discovered a
                vibrant community of individuals who are passionate about
                sharing their ideas and engaging in thoughtful discussions.”
              </p>
              <h5 className="mb-4">
                Adebobola Muhydeen, Software developer at Apple{" "}
              </h5>
              <Link to="/signup">
                <Buttons
                  content="Join chatter"
                  styles="bg-blue text-white rounded px-4 py-1 text-sm font-semibold"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
