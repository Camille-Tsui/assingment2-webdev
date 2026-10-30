const Footer = () => {
    return (
        <footer className="bg-slate-600 text-slate-100">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-base font-semibold text-white">New Generation High School</p>
                <div className="flex flex-col gap-1">
                <p>306 Education Boulevard, Calgary, AB T3Z 1N4</p>
                <p>Phone: 403-123-4567</p>
                <p>Email: newgenhighschool@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;