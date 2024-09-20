import React, { useState } from "react";
import StudentTable from "../components/StudentTable";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";

const StudentPage = () => {
  const [clickedStudent, setClickedStudent] = useState(null);
  return (
    <div className="h-screen flex flex-col">
      <HeaderComp />
      <StudentTable setClickedStudent={setClickedStudent} />
      <FooterComp clickedStudent={clickedStudent} />
    </div>
  );
};

export default StudentPage;
