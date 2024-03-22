import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Verification({ email }: any) {
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    console.log("newPin", newPin);
    setPin(newPin);
  };

  return (
    <div className="flex">
      <div className="hidden md:block md:relative lg:block lg:relative w-1/2">
        <div className="relative h-full">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/assets/woman-bg.png`}
            alt="background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h4 className="text-3xl font-semibold">CHATTER</h4>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-4">
        <div className="my-2 flex items-center gap-2">
          <Link to="/signup" className="flex-shrink-0">
            <img
              src={`${process.env.PUBLIC_URL}/assets/arrowcircleleft.svg`}
              alt="back"
              className="h-5 w-5"
            />
          </Link>
          <span className="flex-shrink-0">Back</span>
        </div>

        <div className="ml-20 flex flex-col justify-center items-center space-y-4">
          <h4 className="text-2xl font-semibold">Enter confirmation code</h4>
          <p>
            We emailed you a code. Please input the code here for account
            verification
          </p>
          <div className="flex gap-4">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-input-${index}`}
                type="text"
                className="py-2 border text-xl border-gray-300 text-center font-semibold w-16 rounded"
                maxLength={1}
                value={digit}
                ref={(ref) => ref && (inputRefs.current[index] = ref)}
                onChange={(event) => handleChange(index, event.target.value)}
              />
            ))}
          </div>
          <button className="bg-blue-500 text-white rounded px-4 py-3 text-sm font-semibold w-full">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
