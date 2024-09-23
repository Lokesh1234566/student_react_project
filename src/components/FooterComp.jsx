/* eslint-disable react/prop-types */
import React from "react";

const FooterComp = ({ clickedStudent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-300 p-4">
      <div className="mb-2">
        {clickedStudent ? (
          <div className="flex gap-4 flex-wrap text-xs sm:text-[16px] flex-col">
            <p className="text-green-500">
              <span className="text-green-900 font-bold">Name:</span>{" "}
              {clickedStudent.Name}
            </p>
            <p className="text-blue-500">
              <span className="text-blue-900 font-bold">Email:</span>{" "}
              {clickedStudent.Email}
            </p>
            <p className="text-red-500">
              <span className="text-red-900 font-bold">Address:</span>{" "}
              {clickedStudent.Address}
            </p>
          </div>
        ) : (
          <p>No student selected yet</p>
        )}
      </div>
      <div className="font-bold text-slate-700 text-sm md:text-lg">
        <marquee>Welcome to college website @ 2024</marquee>
      </div>
    </div>
  );
};

export default FooterComp;
