import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../components/MovieDetail";

export const Movie = () => {
    const moviesURL = import.meta.env.VITE_API;
    const apiKEY = import.meta.env.VITE_API_KEY;

    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    };

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKEY}`;

        getMovie(movieURL);
    }, []);

    return (
        <div className="p-10">
            {movie && (
                <>
                    <MovieDetail movie={movie} showLink={false} />
                </>
            )}
        </div>
    );
};
