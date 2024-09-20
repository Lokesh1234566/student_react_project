/* eslint-disable react/prop-types */
import React from "react";

const FooterComp = ({ clickedStudent }) => {
  return (
    <div className="h-[20vh] bg-gray-300">
      {clickedStudent ? (
        <div className="flex gap-4 flex-wrap">
          <p>
            <strong>Name:</strong> {clickedStudent.Name}
          </p>
          <p>
            <strong>Age:</strong> {clickedStudent.Age}
          </p>
          <p>
            <strong>Gender:</strong> {clickedStudent.Gender}
          </p>
          <p>
            <strong>Course:</strong> {clickedStudent.Course}
          </p>
          <p>
            <strong>10th Grade:</strong> {clickedStudent["10th_Grade"]}
          </p>
          <p>
            <strong>Student ID:</strong> {clickedStudent.Student_id}
          </p>
          <p>
            <strong>Email:</strong> {clickedStudent.Email}
          </p>
          <p>
            <strong>Phone:</strong> {clickedStudent.Phone}
          </p>
          <p>
            <strong>Address:</strong> {clickedStudent.Address}
          </p>
          <p>
            <strong>Enrollment Year:</strong> {clickedStudent.Enrollment_year}
          </p>
          <p>
            <strong>FA_English:</strong> {clickedStudent.FA_English}
          </p>
          <p>
            <strong>FA_Kannada:</strong> {clickedStudent.FA_Kannada}
          </p>
          <p>
            <strong>FA_Physics:</strong> {clickedStudent.FA_Physics}
          </p>
          <p>
            <strong>FA_Chemistry:</strong> {clickedStudent.FA_Chemistry}
          </p>
          <p>
            <strong>FA_Mathematics:</strong> {clickedStudent.FA_Mathematics}
          </p>
          <p>
            <strong>FA_Biology:</strong> {clickedStudent.FA_Biology}
          </p>
        </div>
      ) : (
        <p>No student selected yet</p>
      )}
    </div>
  );
};

export default FooterComp;
