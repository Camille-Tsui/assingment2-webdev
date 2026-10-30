const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 bg-indigo-700 text-white shadow-md">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">New Generation High School</p>
                    <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
                        <a href="#overview" className="rounded px-3 py-2 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Overview
                        </a>
                        <a href="#students" className="rounded px-3 py-2 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Students
                        </a>
                        <a href="#add-student" className="rounded px-3 py-2 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Add a student
                        </a>
                    </nav> 
                </div>
        </header>
    );
};

export default Navbar;