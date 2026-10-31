const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 bg-indigo-700 text-white shadow-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <p className="text-2xl font-bold sm:text-3xl">New Generation High School</p>
                    <nav className="flex flex-wrap gap-x-5 gap-y-1 text-lg font-medium">
                        <a href="#overview" className="rounded px-3 py-2 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Overview
                        </a>
                        <a href="#students" className="rounded px-3 py-2 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Students
                        </a>
                        <a href="#add-student" className="rounded px-3 py-2 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Add A Student
                        </a>
                    </nav> 
                </div>
        </header>
    );
};

export default Navbar;