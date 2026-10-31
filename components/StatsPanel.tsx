interface StatsPanelProps {
    totalStudents: number;
    honourRollCount: number;
    grade12Count: number;
}

const StatsPanel = ({ 
    totalStudents, 
    honourRollCount, 
    grade12Count, 
}: StatsPanelProps) => {

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-md bg-slate-200 px-8 py-4 shadow-md">
                <p className="text-4xl font-bold text-slate-900">{totalStudents}</p>
                <p className="font-semibold">Total Students</p>
            </div>
            <div className="flex flex-col items-center rounded-md bg-slate-200 px-8 py-4 shadow-md">
                <p className="text-4xl font-bold text-slate-900">{honourRollCount}</p>
                <p className="font-semibold">Honour Roll Students</p>
            </div>
            <div className="flex flex-col items-center rounded-md bg-slate-200 px-8 py-4 shadow-md">
                <p className="text-4xl font-bold text-slate-900">{grade12Count}</p>
                <p className="font-semibold">Grade 12 Students</p>
            </div>
        </div>
    );
};

export default StatsPanel;