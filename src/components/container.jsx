import React from "react";

const container = () => {
  return (
    <div className="flex justify-evenly">
      <div className="">
        <p className="font-extrabold text-7xl mt-32 ">
          <p className="text-green-600">ATTEND LIVE</p>CLASSES EVERY <br />
          WEEK
        </p>
        <p className="mt-5 text-balance">
          Join Founders, freelancers, designers, FAANG enginners, indie
          hackers,and<br />
          more in our 24/7 WhatsApp Group for less than a cup of coffee.
        </p>
        <button className="bg-green-500 rounded-3xl py-3 px-8 mt-7">
          Join 24/7 Whatsapp + discord for $5/month
        </button>
      </div>

      <div className=" box-border h-full  w-half p-4 border-4">
        <p className="font-extrabold text-7xl">
         AI Bootcamps
        </p>
        <p>
          Kickstart your Artificial Intelligence journy
        </p>
      </div>
    </div>
  );
};

export default container;
