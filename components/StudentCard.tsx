
import { useState } from 'react';

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

interface StudentCardProps {
    student: Student;
}



const StudentCard = ({student}: StudentCardProps) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className="flex">
            <p>{student.firstName} {student.lastName}</p>
            <p>Grade: {student.grade} </p>
            <p>Average: {student.average} </p>
            {showDetails ? <p>Average: {student.average} </p> : ''}
        <button onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : "Show Details"}
        </button>
        {/* <button onClick={removeStudent}>

        </button> */}
        </div>
    );
};

export default StudentCard;