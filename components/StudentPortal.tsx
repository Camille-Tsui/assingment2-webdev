"use client";

import { useState } from "react";
import { students as initalStudents, Student } from "@/data/students";
import StudentList from "@/components/StudentList"
import AddStudent from "@/components/AddStudent"
import SearchBox from "@/components/SearchBox";


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



    return(
        <main className="flex flex-col items-center">
            <SearchBox searchText={searchText} onSearchChange={setSearchText}/>


            <StudentList students={matchingStudents} onRemove={handleRemove}></StudentList>
        <button onClick={handleClearAll} className="bg-red-600 px-3 py-2 rounded shadow-md hover:bg-red-700 w-30">
                    clear all
                </button>
        <AddStudent onAdd={handleAdd}></AddStudent>
        </main>
        
    );
};
export default StudentPortal;