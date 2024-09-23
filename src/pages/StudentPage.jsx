import React, { useState } from "react";
import StudentTable from "../components/StudentTable";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";

const StudentPage = () => {
  const [clickedStudent, setClickedStudent] = useState(null);
  const [tableVisible, setTableVisible] = useState(true); // State for table visibility

  return (
    <div className="flex flex-col h-full">
      <HeaderComp setTableVisible={setTableVisible} />
      <div className={`flex-grow ${tableVisible ? "" : "hidden"}`}>
        <StudentTable setClickedStudent={setClickedStudent} />
      </div>
      <FooterComp clickedStudent={clickedStudent} />
    </div>
  );
};

export default StudentPage;
