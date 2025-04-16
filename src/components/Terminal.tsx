import { ReactNode } from "react";

const Terminal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-[#0b0b7] rounded-3xl shadow-lg border border-[#5a5a5a] overflow-hidden">
      <div className="bg-gradient-to-r from-[#181818] via-[#7a7a7a] to-[#181818] py-4 px-6 flex items-center justify-between border-gray-600">
        <div className="flex">
          <div className="w-3.5 h-3.5 bg-red-500 rounded-full mr-3.5 red-shadow" />
          <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full mr-3.5 yellow-shadow" />
          <div className="w-3.5 h-3.5 bg-green-500 rounded-full green-shadow" />
        </div>
        
        <img src="/assets/plus.svg" alt="plus-icon" />
      </div>
      <div className="h-fit px-1 py-10 text-gray-200 flex justify-center bg-[#0e0e10]">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
