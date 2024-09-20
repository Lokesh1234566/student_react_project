import React from "react";
import StudentTable from "../components/StudentTable";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";

const StudentPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <HeaderComp />
      <StudentTable />
      <FooterComp />
    </div>
  );
};

export default StudentPage;
