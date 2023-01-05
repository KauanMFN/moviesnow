import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const apiKEY = import.meta.env.VITE_API_KEY;
    const moviesURL = import.meta.env.VITE_API;

    // const apiURL = `${moviesURL}550/api_key=${apiKEY}`;

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKEY}&language=pt-BR`;

        getTopRatedMovies(topRatedUrl);

        // console.log("Loading");
    }, []);

    return (
        <div>
            <h2 className="text-center uppercase font-bold text-2xl mb-5 mt-5">
                Filmes mais bem avaliados:
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {topMovies.length === 0 && (
                    <p className="text-gray-400">Carregando... </p>
                )}

                {topMovies.length > 0 &&
                    topMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};
