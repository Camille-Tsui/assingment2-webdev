"use client";

import { event } from "next/dist/build/output/log";
import React, { useState } from "react";

interface addStudentProps {
  onAdd: (
    firstName: string,
    lastName: string,
    grade: number,
    average: number,
  ) => void;
}

const addStudent = ({ onAdd }: addStudentProps) => {
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
    <div className="flex items-center flex-col gap-3">
      <div className="flex gap-3 items-center">
        <div className="flex-col">
            <div>
                First name
            </div>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            className="flex-1 rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
          ></input>
        </div>
        <div className="flex-col">
            <div>Last name</div>
            <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          className="flex-1 rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
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
          className="flex-1 rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
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
          className="flex-1 rounded-lg border border-slate-600 px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
        ></input>
        </div>
        
      </div>

      <button
        onClick={handleAdd}
        className="bg-red-600 px-3 py-2 rounded shadow-md hover:bg-red-700 w-30 "
      >
        add
      </button>
    </div>
  );
};
export default addStudent;
