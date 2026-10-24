"use client";

import { useState } from "react";
import { students as initalStudents } from "@/data/students";
import StudentCard from "@/components/StudentCard"

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

const StudentList = () => {
    const [students, setStudents] = useState<Student[]>(initalStudents);

    const handleRemove = (id: number) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return(
        <div>
            {students.map((student) => (
                <StudentCard key={student.id} student={student} onRemove={handleRemove}></StudentCard>
            ))}
            <p>No students left</p>
        </div>
    );
};

export default StudentList;