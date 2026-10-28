"use client";

import { useState } from "react";
import { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard"

interface StudentListProps{
    students: Student[];
    onRemove: (id: number) => void;
}

const StudentList = ({students, onRemove}: StudentListProps) => {
    return(
        <div className=" flex flex-col gap-3">
            {students.map((student) => (
                <StudentCard key={student.id} student={student} onRemove={onRemove}></StudentCard>
            ))}
            <p className="flex justify-center">No students left</p>
        </div>
    );
};

export default StudentList;