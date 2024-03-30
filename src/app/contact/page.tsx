"use client";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div className="min-h-screen bg-zinc-700 py-12 pt-36">
      <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
      {/* <form
        action=""
        className="flex flex-col justify-center items-center py-[2rem] gap-[3rem]"
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          className="placeholder:italic placeholder:text-[1.5rem] placeholder:text-red-700 w-[50%] h-[5rem] bg-gray-500 rounded-3xl px-[1rem]"
        />
        <input
          type="text"
          placeholder="Enter Your Name"
          className="placeholder:italic placeholder:text-[1.5rem] placeholder:text-red-700 w-[50%] h-[5rem] bg-gray-500 rounded-3xl px-[1rem]"
        />
        <input
          type="text"
          placeholder="Enter Your Name"
          className="placeholder:italic placeholder:text-[1.5rem] placeholder:text-red-700 w-[50%] h-[5rem] bg-gray-500 rounded-3xl px-[1rem]"
        />
      </form> */}
      <div className=" w-full relative max-w-[40rem] m-[auto]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex flex-col justify-center gap-[3rem] w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="text-white placeholder:italic placeholder:text-[1.5rem] placeholder:text-red-700 w-[100%] h-[4rem] bg-transparent rounded-3xl px-[1rem] border-2 border-solid border-zinc-600"
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-white placeholder:italic placeholder:text-[1.5rem] placeholder:text-red-700 w-[100%] h-[4rem] bg-transparent rounded-3xl px-[1rem] border-2 border-solid border-zinc-600"
            />
            <input
              type="text"
              placeholder="Password"
              className="text-white placeholder:italic placeholder:text-[1.5rem] placeholder:text-red-700 w-[100%] h-[4rem] bg-transparent rounded-3xl px-[1rem] border-2 border-solid border-zinc-600"
            />
          </div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default page;
