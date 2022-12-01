import { Link, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { useState } from "react";

export const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return (
        <nav className="px-8 py-4 flex justify-between items-center bg-light-gray sm:px-12 transition-all">
            <h2>
                <Link
                    to="/"
                    className="flex items-center gap-1 font-extrabold text-2xl"
                >
                    <BsFillCameraReelsFill className="text-lg" /> MoviesNow
                </Link>
            </h2>

            <form className="flex gap-2" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Busque um filme"
                    className="bg-gray-100 px-2 rounded-md text-gray outline-none w-auto sm:w-64"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <HiSearch className="text-3xl bg-orange rounded-md h-full p-1" />
                </button>
            </form>
        </nav>
    );
};
