import React from "react";
import { Table } from "flowbite-react";
import sampledata from "../assets/samplev1.json";

const StudentTable = () => {
  return (
    <div className="overflow-x-auto max-h-[600px]">
      <div className="min-w-full bg-white border border-gray-200 shadow-md sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border border-slate-400">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-[16px] sticky top-0 z-10">
            <Table.HeadCell className="border border-slate-400 sticky left-0  bg-gray-50">
              SI No
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 sticky left-[50px]  bg-gray-50">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Age
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Gender
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Course
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              10th_Grade
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Student_id
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Email
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Phone
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Address
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              Enrollment_year
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              FA_English
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              FA_Kannada
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              FA_Physics
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              FA_Chemistry
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              FA_Mathematics
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400">
              FA_Biology
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="">
            {sampledata.student_details.map((student, id) => (
              <Table.Row key={id} className="border border-slate-400">
                <Table.Cell className="border border-slate-400 sticky left-0  bg-white">
                  {id + 1}
                </Table.Cell>
                <Table.Cell className="border border-slate-400 sticky left-[50px] bg-white">
                  {student.Name}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Age}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Gender}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Course}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student["10th_Grade"]}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Student_id}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Email}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Phone}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Address}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.Enrollment_year}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_English}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Kannada}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Physics}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Chemistry}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Mathematics}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {student.FA_Biology}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default StudentTable;
