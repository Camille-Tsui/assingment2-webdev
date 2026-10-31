"use client";

import { useState } from "react";

interface AddStudentProps {
  onAdd: (
    firstName: string,
    lastName: string,
    grade: number,
    average: number,
  ) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(9);
  const [average, setAverage] = useState(70);

  const handleAdd = () => {
    if (firstName == "" || lastName == "") {
      return;
    }
    onAdd(firstName.trim(), lastName.trim(), grade, average);
    setFirstName("");
    setLastName("");
    setAverage(70);
    setGrade(9);
  };
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(Number(event.target.value));
  };
  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGrade(Number(event.target.value));
  };

  return (
    <div className="flex w-full items-center flex-col gap-3">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex-col">
            <div>
                First Name
            </div>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            className="w-full rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
          ></input>
        </div>
        <div className="flex-col">
            <div>Last Name</div>
            <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          className="w-full rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
        ></input>
        </div>

        <div className="flex-col">
            <div>Grade</div>
            <input
          type="number"
          value={grade}
          onChange={handleGradeChange}
          min={9}
          max={12}
          className="w-full rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
        ></input>
        </div>
        <div className="flex-col">
            <div>
                Average
            </div>
            <input
          type="number"
          value={average}
          onChange={handleAverageChange}
          min={0}
          max={100}
          className="w-full rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
        ></input>
        </div>
        
      </div>

      <button
        onClick={handleAdd}
        className="bg-purple-500 px-6 py-3 rounded shadow-md hover:bg-purple-700 text-white"
      >
        Add Student
      </button>
    </div>
  );
};
export default AddStudent;
