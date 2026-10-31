import { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard"

interface StudentListProps{
    students: Student[];
    onRemove: (id: number) => void;
}

const StudentList = ({students, onRemove}: StudentListProps) => {
    return(
         <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} onRemove={onRemove}></StudentCard>
                ))}
            </div>

            {students.length === 0 && (
                <p className="flex justify-center">No students to show.</p>
            )}
        </div>
    );
};

export default StudentList;