"use client";

import { useState } from "react";
import { students as initalStudents, Student } from "@/data/students";
import StudentList from "@/components/StudentList"
import AddStudent from "@/components/AddStudent"
import SearchBox from "@/components/SearchBox";
import StatsPanel from "@/components/StatsPanel";


const StudentPortal = () => {
    const [students, setStudents] = useState<Student[]>(initalStudents);

    const [searchText, setSearchText] = useState("");


    const handleRemove = (id: number) => {
        setStudents(students.filter((student) => student.id !== id));
    };
     const handleClearAll = () => {
        setStudents([]);
    };

    const handleAdd = (firstName: string, lastName: string, grade: number, average: number) =>{
        const newID = (students.length + 1)
        const NewStudent: Student = {id: newID,firstName, lastName, grade, average};
        setStudents([...students, NewStudent])

    }
    const matchingStudents = students.filter((student)=>
        student.lastName.toLowerCase().includes(searchText.toLowerCase()) || student.firstName.toLowerCase().includes(searchText.toLowerCase())
    
    );

    const totalStudents = students.length;
    const honourRollCount = students.filter((student) => student.average >= 80).length;
    const grade12Count = students.filter((student) => student.grade === 12).length;



    return(
        <main className="flex flex-col items-center">
            <section id="overview" className="scroll-mt-24 mb-6 w-full">
                <h2 className="text-2xl font-bold text-center mb-4"> Overview</h2>
                <StatsPanel
                    totalStudents={totalStudents}
                    honourRollCount={honourRollCount}
                    grade12Count={grade12Count}
                />
            </section>
            <section id="students" className="scroll-mt-24 flex flex-col items-center"></section>
                <h2 className="text-2xl font-bold text-center mb-4"> Students</h2>
            <div className="mb-4 flex w-full gap-3">
          <SearchBox searchText={searchText} onSearchChange={setSearchText}/>
            <button
                onClick={handleClearAll} className="whitespace-nowrap rounded bg-red-600 px-4 py-2 text-white shadow-md hover:bg-red-700">Clear all
            </button>
            </div>
            <StudentList students={matchingStudents} onRemove={handleRemove}></StudentList>
                <section id="add-student" className="scroll-mt-24 mt-6"></section>
                <h2 className="text-2xl font-bold text-center mb-4"> Add A Student</h2>
        <AddStudent onAdd={handleAdd}></AddStudent>
        </main>
        
    );
};
export default StudentPortal;