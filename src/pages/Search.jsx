import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

export const Search = (movie, showLink = false) => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    const apiKEY = import.meta.env.VITE_API_KEY;
    const searchURL = import.meta.env.VITE_SEARCH;
    const imageURL = import.meta.env.VITE_IMG;

    // const apiURL = `${moviesURL}550/api_key=${apiKEY}`;

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKEY}&query=${query}&language=pt-BR`;

        getSearchedMovies(searchWithQueryURL);

        // console.log("Loading");
    }, [query]);

    const changeImage = () => {};
    return (
        <div className="p-3 rounded-xl bg-gray w-fit flex justify-center items-center flex-col m-auto mt-4">
            <h2 className="text-center uppercase font-bold text-2xl mb-5 mt-5">
                Resultados para: <span className="text-orange">{query}</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {movies.length === 0 && (
                    <p className="text-gray-400 animate-pulse">Carregando...</p>
                )}

                {movies.length > 0 &&
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};
