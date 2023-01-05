import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, showLink = true }) => {
    const imageURL = import.meta.env.VITE_IMG;

    function changeImage() {}

    return (
        <div className="p-3 rounded-xl bg-light-gray w-fit shadow-lg shadow-black flex justify-between items-center flex-col hover:scale-[103%] transition duration-300">
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={imageURL + movie.poster_path}
                    alt={movie.title}
                    className="rounded-xl h-[400px] max-w-[266.66px]"
                    onMouseOver={changeImage}
                />
            </Link>
            <h2 className="font-bold tracking-wide mt-2 max-w-[200px] text-center">
                {movie.title}
            </h2>

            <p className="flex gap-1 items-center font-semibold mb-3">
                <FaStar className="text-yellow-300" /> {movie.vote_average}
            </p>
            {showLink && (
                <Link
                    to={`/movie/${movie.id}`}
                    className="py-2 border-2 border-orange rounded-md w-full text-center font-semibold hover:text-gray hover:bg-orange transition duration-300"
                >
                    Detalhes
                </Link>
            )}
        </div>
    );
};
