"use client"

interface searchBoxProps{
    searchText: string;
    onSearchChange: (text: string) => void;
}

const searchBox = ({searchText, onSearchChange}: searchBoxProps) =>{
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        onSearchChange(event.target.value);
    };


    return(
        <input
        type="text"
        value={searchText}
        placeholder="search"
        onChange={handleSearchChange}
        className="flex-1 rounded-lg border border-slate-600 px-5 py-3 text-slate-900 focus:border-purple-500 focus:outline-none"
        />
    );
}
export default searchBox;